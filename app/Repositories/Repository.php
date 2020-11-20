<?php

namespace App\Repositories;

use Illuminate\Auth\AuthManager;
use Illuminate\Support\Facades\Auth;

abstract class Repository
{
    protected $model;

    /**
     * @return \Illuminate\Database\Query\Builder
     */
    public function newQuery()
    {
        return (new $this->model)->newQuery();
    }
}
