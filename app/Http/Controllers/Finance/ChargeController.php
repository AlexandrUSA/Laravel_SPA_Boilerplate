<?php

namespace App\Http\Controllers\Finance;

use App\Charge;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class ChargeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return Stripe::charges()->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $charge = Stripe::charges()->create([
        'amount'    => $request->get('amount'),
        'currency'  => $request->get('currency'),
        'customer' => $request->get('customer'),
        'description' => $request->get('description'),
        'metadata' => $request->get('metadata'),
      ]);

      return response($charge, 201);
    }
}
