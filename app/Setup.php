<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

abstract class Setup extends Model
{
    public static function CreateEnvironment ()
    {
      // Отдел руководства
      Department::create([
        'title' => 'Руководство'
      ]);

      // Роли пользователей
      $director = Organization::createRole([
        'name' => 'director',
        'display_name' => 'Директор',
        'description' => 'Директор фирмы',
        'department_id' => 1
      ]);
      $manager = Organization::createRole([
        'name' => 'manager',
        'display_name' => 'Менеджер',
        'description' => 'Менеджер фирмы',
        'department_id' => 1
      ]);
      $accountant = Organization::createRole([
        'name' => 'accountant',
        'display_name' => 'Бухгалтер',
        'description' => 'Бухгалтер фирмы',
        'department_id' => 1
      ]);

      // Разрешения на операции для пользователей
      $permEmployee = Organization::createPermission([
        'name' => 'crud-employee',
        'display_name' => 'Работа с сотрудниками',
        'description' => 'Предоставить доступ к базе сотрудников, их создаванию, изменению и удалению.'
      ]);
      $permFinance = Organization::createPermission([
        'name' => 'finance-actions',
        'display_name' => 'Работа с финансами',
        'description' => 'Предоставить доступ к управлению финансами компании.'
      ]);
      $permClients = Organization::createPermission([
        'name' => 'crud-clients',
        'display_name' => 'Работа с клиентами',
        'description' => 'Предоставить доступ к базе клиентов, их созданию, изменению, удалению.'
      ]);
      $permTours = Organization::createPermission([
        'name' => 'crud-tours',
        'display_name' => 'Работа с турами',
        'description' => 'Предоставить доступ к базе туров, их создаванию, изменению и удалению.'
      ]);

      // Настройка прав для каждой роли
      $director->attachPermissions([$permEmployee, $permFinance, $permClients, $permTours]);
      $manager->attachPermissions([$permClients, $permTours]);
      $accountant->attachPermissions([$permEmployee, $permFinance]);

      // Отделы организации
      $management = Organization::createTeam([
        'name' => 'management',
        'display_name' => 'Руководство',
        'description' => 'Руководство компании'
      ]);
      $management->append([$director, $accountant]);
    }
}
