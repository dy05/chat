<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Conversations') }}
        </h2>
    </x-slot>

    <div class="py-12 flex">
        <div class="w-2/6 sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-md sm:rounded-lg">
                <div class="p-6 bg-green-400 border-b border-gray-200 text-white font-bold">
                    Conversation's List
                </div>
                @foreach ($users as $user)
                <div class="flex bg-white border-b border-gray-200">
                    <a class="w-full p-6" href="{{ route('messages.show', $user->slug) }}">
                        {{ $user->name }}
                        @if(isset($unread[$user->id]) && $unread[$user->id] > 0)
                            <span class="bg-white text-blue-500">({{ $unread[$user->id] }})</span>
                        @endif
                    </a>
                </div>
                @endforeach
            </div>
        </div>
        <div class="w-4/6 sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-md sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    @if (!($contact ?? null))
                        <div class="card">
                            <div class="card-body">
                                <p>
                                    {{ __("Select an user to start conversation") }} !
                                </p>
                            </div>
                        </div>
                    @else
                        @include('conversations.messages')
                    @endif
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
