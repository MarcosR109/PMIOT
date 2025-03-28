<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Historico;
class HistoricoController extends Controller
{
    public function index(){

        try{
            $fichajes = Historico::all();
            return response()->json(['Fichajes encontrados' => $fichajes]);
        }
        catch(\Exception $e){
            return response()->json(['Error' => $e->getMessage()]);
        }
    }
}
