<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Utils\Utils;

class Message extends Model
{
  protected $fillable = [
    'user_id',
    'message'
  ];

  public static function getList ()
  {
      $data = [];
      $messages = self::orderBy('id', 'desc')->take(5)->get();
      $users = User::all('id', 'name', 'last_name', 'patronymic', 'avatar');
      foreach ($messages as $message) {
          $user = $users->find($message->user_id);
          $data[] = [
              'user' => $user,
              'message' => $message
          ];
      }
      return $data;
  }

  public function user ()
  {
    return $this->belongsTo(User::class);
  }
}
