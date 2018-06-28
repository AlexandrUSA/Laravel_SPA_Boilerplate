<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->increments('id');
            $table->char('first_name', 70);
            $table->char('last_name', 70);
            $table->char('patronymic', 70)->default('Нет данных');
            $table->char('country', 70)->default('Нет данных');
            $table->char('city', 70)->default('Нет данных');
            $table->char('street', 70)->default('Нет данных');
            $table->integer('number')->default(0);
            $table->integer('passport')->default(0);
            $table->char('phone_number', 70)->default('Нет данных');
            $table->char('email', 70)->default('Нет данных');
            $table->integer('tour_id')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
