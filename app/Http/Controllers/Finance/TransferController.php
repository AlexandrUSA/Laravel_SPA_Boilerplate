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
      $transfer = Stripe::transfers()->create([
        'amount'    => $request->get('amount'),
        'currency'  => $request->get('currency'),
        'recipient' => $request->get('recipient'),
        'description' => $request->get('description'),
        'metadata' => $request->get('metadata')
      ]);

      return response($transfer, 201);
    }
}
