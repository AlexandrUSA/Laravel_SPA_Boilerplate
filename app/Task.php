<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
      'user_id',
      'date',
      'title',
      'desc',
      'expired',
      'completed'
    ];
}
