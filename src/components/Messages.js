// <ul id="messages"></ul>
// <form action="">
//   <input id="m" autocomplete="off" /><button>Send</button>
// </form>
// <!-- <script src="/socket.io/socket.io.js"></script> -->
// <!-- <script src="https://code.jquery.com/jquery-1.11.1.js"></script> -->
// <script>
//   $(function () {
//     var socket = io()
//     $('form').submit(function(){
//       socket.emit('chat message', $('#m').val())
//       $('#m').val('')
//       return false
//     })
//     socket.on('chat message', function(msg){
//       $('#messages').append($('<li>').text(msg))
//     })
//   })
// </script>

import React from 'react'
import io from 'socket.io'

let socket = io()

export default class Messages extends React.Component {
  render() {
    return (
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autocomplete="off" /><button>Send</button>
      </form>
    )
  }
}
