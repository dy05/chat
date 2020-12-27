<?php

namespace App\Http\Controllers;

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
        $this->middleware('auth')->except('messages');
        $this->messageRepo = $messageRepo;
    }

    public function home()
    {
        return view('conversations.api');
    }

    public function api(Request $request, User $contact)
    {
        return view('conversations.api', ['contact' => $contact]);
    }

    public function index()
    {
        return view('conversations.index', [
            'users' => $this->messageRepo->getContacts(),
            'unread' => $this->messageRepo->unreadCount(),
        ]);
    }

    public function show(Request $request, User $contact)
    {
        if (Auth::guest()) {
            abort(404);
        }

        $messages = $this->messageRepo->allMessagesWith($contact)->paginate(3);
        $unread = $this->messageRepo->unreadCount();
        if (isset($unread[$contact->id])) {
            $this->messageRepo->markAsRead($contact);
            $unread[$contact->id] = 0;
        }

        return view('conversations.index', [
            'users' =>  $this->messageRepo->getContacts(),
            'contact' => $contact,
            'unread' => $unread,
            'messages' => $messages,
        ]);
    }

    public function store(Request $request, User $contact)
    {
        $data = $request->validate([
            'message' => 'required|min:3',
        ]);

        $message = $this->messageRepo->addMessage(
            $data,
            $contact,
        );

        $contact->notify(new MessageReceived($message));

        return redirect()->route('messages.show', ['contact' => $contact->slug]);
    }

}
