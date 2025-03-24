<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\ExternalData;
use App\Observers\ExternalDataObserver;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        ExternalData::observe(ExternalDataObserver::class);
    }
}
