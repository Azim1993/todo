<?php

namespace App\Query;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'user_id', 'name', 'detail'
    ];

    public function user() {
        return $this->belongsTo(\App\Query\User::class);
    }

    public function contest() {
        return $this->belongsToMany(\App\Query\Contest, 'contest_teams');
    }

    public function players() {
        return $this->belongsToMany(\App\Query\User::class, 'team_players');
    }
}
