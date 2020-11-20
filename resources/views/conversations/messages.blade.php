<div class="card">
    <div class="card-header">{{ $contact->name }}</div>

    <div class="card-body">
        <div class="message__body">
        @if(count($messages) < 1)
            <p>No message yet !</p>
        @endif

        @if($messages->hasMorePages())
        <hr>
        <a href="{{ $messages->nextPageUrl() }}" class="bg-teal-300 p-2 text-white">
            Voir les messages precedents
        </a>
        <hr>
        <br>
        @endif

        @foreach (array_reverse($messages->items()) as $message)
            ({{$message->sender->name}})
            {!! nl2br(e($message->message)) !!}
            <hr>
        @endforeach

        @if($messages->previousPageUrl())
            <hr>
            <a href="{{ $messages->previousPageUrl() }}" class="bg-teal-300 p-2 text-white">
                Voir les messages suivants
            </a>
            <hr>
            <br>
        @endif

        </div>

        <div class="message__box">
            <form method="POST" action="" enctype="multipart/form-data">
                @csrf
                <label for="message" class="d-none"></label>
                <input type="file" disabled class="hidden">
                @error('message')
                {{ $message }}
                @enderror
                <textarea class="" placeholder="Enter your message" name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit">
                    <i class="fa fa-send"></i>
                    Send
                </button>
            </form>
        </div>
    </div>
</div>
