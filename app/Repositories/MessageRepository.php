<?php

namespace App\Repositories;

use App\Models\Message;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class MessageRepository extends Repository
{
    protected $model = Message::class;

    /**
     * @return Collection
     */
    public function getContacts()
    {
        $unread = $this->unreadCount();
        return User::all()->map(function ($contact) use ($unread) {
            $contact->unread = $unread[$contact->id] ?? 0;
            return $contact;
        });
    }

    /**
     * @param User $contact
     * @return Builder
     */
    public function allMessagesWith(User $contact)
    {
        return $this->newQuery()
            ->whereRaw('((from_id = :user_id0 AND to_id = :contact_id0) OR (from_id = :contact_id1 AND to_id = :user_id1))',
                [
                    'user_id0' => Auth::id(),
                    'contact_id0' => $contact->id,
                    'user_id1' => $contact->id,
                    'contact_id1' => Auth::id(),
                ])
            ->orderByDesc('created_at');
    }

    /**
     * @param array $data
     * @param User $contact
     * @return mixed
     */
    public function addMessage(array $data, User $contact)
    {
        return $this->newQuery()->create([
            'message' => $data['message'],
            'from_id' => Auth::id(),
            'to_id' => $contact->id,
        ]);
    }

    public function unreadCount(?User $user = null)
    {
        if (!$user) {
            $user = Auth::user();
        }

        return $this->newQuery()
            ->where('to_id', $user->id)
            ->where('read_at', null)
            ->groupBy('from_id')
            ->selectRaw('from_id, COUNT(id) as count')
            ->get()
            ->pluck('count', 'from_id')
        ;
    }

    /**
     * @param User $contact
     * @param User|null $user
     */
    public function markAsRead(User $contact, ?User $user = null): void
    {
        if (!$user) {
            $user = Auth::user();
        }

        $this->newQuery()
            ->where('from_id', $contact->id)
            ->where('to_id', $user->id)
            ->where('read_at', null)
            ->update([
                'read_at' => Carbon::now(),
            ]);
    }
}
