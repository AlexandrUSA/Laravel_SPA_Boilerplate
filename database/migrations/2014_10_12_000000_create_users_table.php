<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('users', function (Blueprint $table) {
      $table->increments('id');
      $table->char('name');
      $table->char('last_name');
      $table->string('email')->unique();
      $table->string('password');
      $table->char('patronymic', 70)->nullable();
      $table->char('sex', 15)->nullable();
      $table->char('passport', 25)->nullable();
      $table->date('birthday')->nullable();
      $table->integer('role_id')->nullable();
      $table->char('phone_number', 100)->nullable();
      $table->char('address', 255)->nullable();
      $table->string('details')->nullable();
      $table->rememberToken();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('users');
  }
}
