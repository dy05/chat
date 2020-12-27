<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use App\Notifications\MessageReceived;
use App\Repositories\MessageRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    /**
     * @var MessageRepository
     */
    private $messageRepo;

    public function __construct(MessageRepository $messageRepo)
    {
        $this->middleware('auth');
        $this->messageRepo = $messageRepo;
    }

    public function getContacts(Request $request)
    {
        return response()->json(
            [
                'users' => $this->messageRepo->getContacts(),
                'unread' => $this->messageRepo->unreadCount(),
            ]
        );
    }

    public function getMessages(Request $request, User $contact)
    {
        $messages = $this->messageRepo->allMessagesWith($contact)->paginate(3);
        $unread = $this->messageRepo->unreadCount();
        if (isset($unread[$contact->id])) {
            $this->messageRepo->markAsRead($contact);
            $unread[$contact->id] = 0;
        }

        return response()->json([
            'users' =>  $this->messageRepo->getContacts(),
            'contact' => $contact,
            'unread' => $unread,
            'messages' => $messages,
        ]);
    }

    public function addMessage(Request $request, User $contact)
    {
        $data = $request->validate([
            'message' => 'required|min:3',
        ]);

        $message = $this->messageRepo->addMessage(
            $data,
            $contact,
        );

        $contact->notify(new MessageReceived($message));

        return $this->getMessages($request, $contact);
    }

    public function updateMessage(Request $request, Message $message)
    {
        $message->update([
            'nom' => 'loll',
        ]);
        return true;
    }

    public function deleteMessage(Request $request, Message $message)
    {
        $message->destroy();
        return true;
    }

}
