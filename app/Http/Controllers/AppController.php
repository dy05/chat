<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{

    public function setLocale($locale)
    {
        if (array_key_exists($locale, config('locale.languages'))) {
            session()->put('locale', $locale);
        }

        return redirect()->back();
    }

    public function privacy()
    {
        return view('pages.privacy');
    }
    
    public function terms()
    {
        return view('pages.terms');
    }

}
