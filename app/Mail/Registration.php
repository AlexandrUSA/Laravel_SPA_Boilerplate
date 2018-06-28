<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Registration extends Mailable
{
  use Queueable, SerializesModels;

  /**
   * Имя пользователя
   * @var string
   */
  public $name;

  /**
   * Фамилия пользователя
   * @var string
   */
  public $last_name;

  /**
   * Email пользователя
   * @var string
   */
  public $email;
  /**
   * Пароль пользователя
   * @var string
   */
  public $password;

  /**
   * Наименование организации
   * @var string
   */
  public $company_name;

  /**
   * Create a new message instance.
   * @param array $data - Данные пользователя (Имя, Фамилия, Пароль)
   */
  public function __construct(array $data)
  {
    $this->name = $data['name'];
    $this->last_name = $data['last_name'];
    $this->email = $data['email'];
    $this->password = $data['password'];
    $this->company_name = $data['company_name'];
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
    return $this->view('emails.newUserInvite');
  }
}
