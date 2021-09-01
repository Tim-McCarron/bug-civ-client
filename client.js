const serverUrl = 'ws://localhost:3002'
import io from 'socket.io-client'
import Player from './Entities/player'

export default class Client {
  constructor() {
    this.socket = null
    this.clientId = null
    this.players = []
  }

  updatePlayers(payload) {
    const players = JSON.parse(payload)
    this.players = Object.keys(players).map(id => new Player(`${id}`, players[ id ].x, players[ id ].y))
    console.log(JSON.parse(payload))
  }

  connect() {
    this.socket = io(serverUrl)
    this.socket.on('connect', () => {
      this.socket.send(JSON.stringify({ connectRequest: true }))
    })

    this.socket.on('message', data => {
      this.updatePlayers(data)
    })
  }

  getPlayers() {
    return this.players
  }
 
}