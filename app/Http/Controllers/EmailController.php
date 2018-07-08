<?php

namespace App\Http\Controllers;

use App\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    return Email::getList($request->user()->id);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $content = [
      'message' => $request->message,
      'from_id' => $request->from_id,
      'to_id' => null,
      'watched' => false
    ];
    foreach ($request->recipients as $recipient) {
      $content['to_id'] = $recipient;
      Email::create($content);
    }
    return response($this->index($request), 201);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\Email $email
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Email $email)
  {
    $email->update($request->all());
    return $email;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Email $email
   * @return \Illuminate\Http\Response
   */
  public function destroy(Email $email)
  {
    $email->delete();
    return response('', 204);
  }
}
