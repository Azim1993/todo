<?php

namespace App\Query;

use Illuminate\Database\Eloquent\Model;

class ContestTeam extends Model
{
    protected $fillable = [
        'contest_id', 'user_id'
    ];
}
