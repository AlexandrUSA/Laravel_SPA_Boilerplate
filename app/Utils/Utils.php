<?php
namespace App\Utils;

abstract class Utils
{
  public static function generatePassword (int $length = 8)
  {
    $chars = 'abdefhiknrstyzABDEFGHKNQRSTYZ0123456789';
    $numChars = strlen($chars);
    $string = '';
    for ($i = 0; $i < $length; $i++) {
      $string .= substr($chars, rand(1, $numChars) - 1, 1);
    }
    return $string;
  }

  public static function arrayFind(Array $array, $key, $value) {
    foreach ($array as $subarray){
      if (isset($subarray[$key]) && $subarray[$key] == $value)
        return $subarray;
    }
    return [];
  }

}
