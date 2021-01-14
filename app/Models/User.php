<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'phone',
        'slug',
        'email',
        'password',
        'description',
        'owner_id',
        'avatar_path',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public static function all($columns = ['*'])
    {
        if (!Auth::user()) {
            return parent::all($columns);
        }

        return (new static)->newQuery()
            ->where('id', '!=', Auth::user()->id)
            ->get(is_array($columns) ? $columns : func_get_args());
    }

    public function groups()
    {
        return $this->belongsToMany(User::class, GroupUser::class, 'id', 'user_id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, GroupUser::class, 'id', 'group_id');
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function (self $model) {
            $model->slug = Str::slug($model->name);
        });
    }
}
