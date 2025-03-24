<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Historico extends Model
{
 protected $fillable = ['fecha','hora','tipo_de_evento'];
 
 
 public function user(){
    return $this->belongsTo(User::class);
 }
}
