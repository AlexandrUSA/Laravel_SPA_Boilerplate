<?php

namespace App\Http\Controllers\Finance;

use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class RecipientController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Stripe::recipients()->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $recipient = Stripe::recipients()->create([
        'name' => $request->get('name'),
        'type' => 'individual',
        'card' => $request->get('card'),
        'email' => $request->get('email'),
        'description' => $request->get('description')
      ]);
      return response($recipient, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      $recipientID = $request->get('recipient_id');
      $recipientParams = $request->get('recipient_params');
      $recipient = Stripe::recipients()->update($recipientID, $recipientParams);
      return $recipient;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $recipient = Stripe::recipients()->destroy([
        'id' => $request->get('recipient_id'),
      ]);

      return response($recipient, 200);
    }
}
