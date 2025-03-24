<?php

namespace App\Observers;

use App\Models\ExternalData;
use Illuminate\Support\Facades\Artisan;

class ExternalDataObserver
{
    /**
     * Handle the ExternalData "created" event.
     */
    public function created(ExternalData $externalData): void
    {
        dd($externalData);
        Artisan::call('importar:datos'); // Llama al comando que definimos antes
    }

    /**
     * Handle the ExternalData "updated" event.
     */
    public function updated(ExternalData $externalData): void
    {
        //
    }

    /**
     * Handle the ExternalData "deleted" event.
     */
    public function deleted(ExternalData $externalData): void
    {
        //
    }

    /**
     * Handle the ExternalData "restored" event.
     */
    public function restored(ExternalData $externalData): void
    {
        //
    }

    /**
     * Handle the ExternalData "force deleted" event.
     */
    public function forceDeleted(ExternalData $externalData): void
    {
        //
    }
}
