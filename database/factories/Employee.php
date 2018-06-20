<?php

use Faker\Generator as Faker;

$factory->define(\App\Employee::class, function (Faker $faker) {
    return [
            'first_name' => str_random(10),
            'last_name' =>str_random(50),
            'patronymic' => str_random(80),
            'birthday' => DateTime::ATOM,
            'salary' => rand(200, 1500),
            'position' => 'Сотрудник',
            'address' => 'г. Гомель, ул. Советская, д.6',
            'phone_number' => '+' . 375 . '29' . mt_rand(1000000, 9999999)
    ];
});
