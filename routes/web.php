<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;


require __DIR__.'/auth.php';

// Change langauge
Route::get('/lang/{locale}', [AppController::class, 'switch'])->name('setLocale');

Route::get('/privacy', [AppController::class, 'privacy'])->name('privacy.page');
Route::get('/terms', [AppController::class, 'terms'])->name('terms.page');


Route::get('/', function () {
    return redirect()->route('home');
});
Route::get('/home', [ContactController::class, 'home'])
    ->name('home');
Route::get('/{contact}', [ContactController::class, 'api'])
    ->middleware('can:talkTo,contact');
//    ->where('contact', '|*.*');
//Route::get('/{user?}', [ConversationController::class, 'api']);


//Route::middleware('auth')->group(function () {
    // Route::get('/{contact}', [ConversationController::class, 'show'])
    //     ->middleware('can:talkTo,contact')
    //     ->name('messages.show');
    // Route::post('/{contact}', [ConversationController::class, 'store'])
    //     ->middleware('can:talkTo,contact');
// });

