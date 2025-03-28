<?php

use App\Http\Controllers\HistoricoController;
use App\Models\Historico;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(HistoricoController::class)->group(function () {
    Route::get('/fichajes', 'index');
});

