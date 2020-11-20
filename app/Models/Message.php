<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'message', 'from_id',
        'to_type', 'to_id',
        'readers', 'views',
        'read_at',
    ];

    protected $casts = [
        'readers' => 'integer',
        'views' => 'integer',
        'read_at' => 'date',
    ];

    public function sender()
    {
        return $this->belongsTo(User::class, 'from_id');
    }

    public function receiver()
    {
        return $this->belongsTo(User::class, 'to_id');
    }

}
