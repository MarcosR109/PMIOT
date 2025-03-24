<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("INSERT INTO RFIDS (serial) VALUES ('296FAC7A'), ('DBCFF40A')");
        DB::statement("INSERT INTO USERS (nombre, apellido, name, email, password, rfid_id,grupo,rol) VALUES 
            ('Fulgencio', 'Fulgenciez', 'Fulgencio1', 'fulgencio1@email.com', '12345678', 1,'A',1),
            ('Paco', 'Mer', 'Tortilla', 'paco@mer.com', '12345678', 2,'B',1)
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }

};
