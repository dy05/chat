<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class GroupUser extends Pivot
{
    protected $fillable = [
        'is_admin',
        'user_id',
        'group_id',
    ];
}
