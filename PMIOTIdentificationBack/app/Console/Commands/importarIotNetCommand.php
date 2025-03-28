<?php

namespace App\Console\Commands;
use App\Models\Historico;
use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use App\Models\User;
use App\Models\rfid;

class importarIotNetCommand extends Command
{

    /**
     * Execute the console command.
     */
    protected $signature = 'importar:datos';

    // Descripción del comando
    protected $description = 'Importa datos de pmiot a tu bbdd';

    public function handle()
    {
        $this->info('Iniciando importación de datos...');

        // Consultar la base de datos externa
        $registros = DB::connection('externa')->table('data')
            ->where('topic', 'like', '%identification%')
            ->select('value') // Selecciona solo el campo que debe ser único
            ->distinct()
            ->get();
        //Habría que añadir un filtrado por fecha o buscar la manera de que esta consulta SOLO saque los datos que se acaban de dar de alta.

        foreach ($registros as $registro) {
            if (!isset($registro->value)) {
                $this->warn("Registro sin 'value' detectado. Omitiendo...");
                continue;
            }

            $rfid = Rfid::where('serial', $registro->value)->first();
            if (!$rfid) {
                $this->warn("No se encontró RFID con serial: {$registro->value}. Omitiendo...");
                continue;
            }

            $user = User::where('rfid_id', $rfid->id)->first();
            if (!$user) {
                $this->warn("No se encontró un usuario con RFID ID: {$rfid->id}. Omitiendo...");
                continue;
            }
            $historico = new Historico();
            $historico->fecha = now();
            $historico->tipo_de_evento = 'fichaje';
            $historico->user_id = $user->id;
            $historico->save();
            $this->info("Histórico creado para el usuario ID: {$user->id}");
        }
    }
}
