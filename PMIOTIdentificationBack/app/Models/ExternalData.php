<?php

namespace App\Models;

use App\Observers\ExternalDataObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;

#[ObservedBy([ExternalDataObserver::class])]
class ExternalData extends Model
{
    protected $connection = 'externa';
    protected $table = 'data';
    protected $fillable = ['value', 'topic'];
}
