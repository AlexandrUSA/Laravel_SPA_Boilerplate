<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $fillable = [
      'from_id',
      'to_id',
      'message',
      'watched'
    ];

  /**
   * @param int $user_id ID пользователя
   * @return array
   */
    public static function getList(int $user_id)
    {
      $mails = [];
      $mails['received'] = Email::where('to_id', $user_id)->get();
      $mails['sent'] = Email::where('from_id', $user_id)->get();
      return $mails;
    }
}
