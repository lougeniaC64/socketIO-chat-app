
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
  constructor() {
    super()
  }

  // sendMessage(e) => {
  //   console.log(e)
  //   // socket.emit('chat message', e.)
  // }

  render() {
    return (
      <div>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
      </div>
    )
  }
}
