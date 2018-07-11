<?php

namespace App\Http\Controllers;

use App\Message;
use App\Events\ChatMessage;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Message::getList();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $user = $request->user();
      $message = Message::create([
        'user_id' => $user->id,
        'message' => $request->get('message')
      ]);
      event(new ChatMessage($user, $message));
      return response('', 204);
    }
}
