<?php

namespace App\Http\Controllers\Finance;

use App\Balance;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class BalanceController extends BaseController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Stripe::balance()->current();
  }

  public function getAccount ()
  {
    return Stripe::account()->details();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Balance $balance
   * @return \Illuminate\Http\Response
   */
  public function show(Balance $balance)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\Balance $balance
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Balance $balance)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Balance $balance
   * @return \Illuminate\Http\Response
   */
  public function destroy(Balance $balance)
  {
    //
  }
}
