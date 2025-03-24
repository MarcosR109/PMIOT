<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rfid extends Model
{
    protected $fillable = ['value','id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
