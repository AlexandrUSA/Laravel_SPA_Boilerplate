<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('service_id')->nullable();
            $table->string('country', 70);
            $table->string('resort', 100);
            $table->string('transport', 100);
            $table->boolean('visa_service')->default(false);
            $table->boolean('accommodation')->default(false);
            $table->string('accommodation_type', 50);
            $table->boolean('food')->default(false);
            $table->string('food_type', 50);
            $table->boolean('excursions')->default(false);
            $table->date('departure_date');
            $table->date('arrival_date');
            $table->integer('price');
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
        Schema::dropIfExists('tours');
    }
}
