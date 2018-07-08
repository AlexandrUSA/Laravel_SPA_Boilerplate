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
    $messages = self::all();
    $users = User::all();
    foreach ($messages as $message) {
      $user = $users->find($message->user_id);

      $data['user'] = [
        'name' => $user->name,
        'last_name' => $user->last_name,
        'email' => $user->email
      ];
      $data['message'] = $message;
    }
    return $data;
  }

  public function user ()
  {
    return $this->belongsTo(User::class);
  }
}
