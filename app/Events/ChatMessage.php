<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use App\User;
use App\Message;

class ChatMessage implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  /**
   * User, who send message
   * @var
   */
  public $user;

  /**
   * Message text
   * @var
   */
  public $message;

  /**
   * ChatMessage constructor.
   * @param User $user
   * @param Message $message
   */
  public function __construct(User $user, Message $message)
  {
    $this->user = $user;
    $this->message = $message;
  }

  /**
   * Get the channels the event should broadcast on.
   *
   * @return \Illuminate\Broadcasting\Channel|array
   */
  public function broadcastOn()
  {
    return new PrivateChannel('chat-room');
  }
}
