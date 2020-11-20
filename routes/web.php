<?php

use App\Http\Controllers\ConversationController;
use Illuminate\Support\Facades\Route;



require __DIR__.'/auth.php';

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/', function () {
    return redirect()->route('home');
});
Route::get('/home', [ConversationController::class, 'index'])
    ->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/{contact}', [ConversationController::class, 'show'])
        ->middleware('can:talkTo,contact')
        ->name('messages.show');
    Route::post('/{contact}', [ConversationController::class, 'store'])
        ->middleware('can:talkTo,contact');
});

