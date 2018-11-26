<?php

namespace App\Query;

use Illuminate\Database\Eloquent\Model;

class Contest extends Model
{
    protected $fillable = [
        'user_id', 'name', 'detail'
    ];

    public function user() {
        return $this->belongsTo(\App\Query\User::class);
    }

    public function teams() {
        return $this->belongsToMany(\App\Query\Team::class, 'contest_teams');
    }
}
