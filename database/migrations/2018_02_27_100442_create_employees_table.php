<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('id');
            $table->char('first_name', 70);
            $table->char('last_name', 70);
            $table->char('patronymic', 70)->default('');
            $table->integer('salary')->default(0);
            $table->integer('position_id')->default(2);
            $table->char('address', 255)->default('');
            $table->char('phone_number', 100)->default('');
            $table->string('avatar', 255)->default('/storage/avatars/no-avatar.jpg');
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
        Schema::dropIfExists('employees');
    }
}
