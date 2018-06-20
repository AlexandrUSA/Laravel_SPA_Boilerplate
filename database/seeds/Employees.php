<?php

use Illuminate\Database\Seeder;
use App\Employee;

class Employees extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Employee::class, 120)->create();

    }
}
