<?php

namespace App\Http\Controllers\Activity;

use App\Http\Controllers\Controller;
use App\Client;
use App\Tour;
use App\Voucher;
use App\Service;

class BaseController extends Controller
{
  public function getAll ()
  {
    $data = [];
    $data['clients'] = Client::all();
    $data['tours'] = Tour::all();
    $data['vouchers'] = Voucher::all();
    return $data;
  }
}
