<?php

namespace App\Http\Controllers\Finance;

use App\Transfer;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class TransferController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return Stripe::transfers()->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $transfer = Stripe::charges()->create([
        'currency' => 'USD',
        'amount'   => 50.49,
        'description' => 'test',
        'customer' => 'cus_D7rUpRpmCGuUtJ'
      ]);
//      $transfer = Stripe::transfers()->create([
//        'amount'    => $request->get('amount'),
//        'currency'  => 'USD',
//        'card' => $request->get('card'),
//        'description' => $request->get('description'),
//        'metadata' => $request->get('metadata'),
//        'destination' => '3434'
//      ]);

      return response($transfer, 201);
    }
}
