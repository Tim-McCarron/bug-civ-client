import Sketch  from 'sketch-js'
import Player from './Entities/player'
import Client from './client'

const character = new Image()
const client = new Client()

let players = []

// const players = [
//   new Player("abe", 5, 5)
// ]
// player input handling shit
const startMoving = e => {
  if (e.code === 'KeyA') {
    queuedInputs.left = true
  }
  if (e.code === 'KeyS') {
    queuedInputs.down = true
  }
  if (e.code === 'KeyW') {
    queuedInputs.up = true
  }
  if (e.code === 'KeyD') {
    queuedInputs.right = true
  }
}

const stopMoving = e => {
  if (e.code === 'KeyA') {
    queuedInputs.left = false
  }
  if (e.code === 'KeyS') {
    queuedInputs.down = false
  }
  if (e.code === 'KeyW') {
    queuedInputs.up = false
  }
  if (e.code === 'KeyD') {
    queuedInputs.right = false
  }
}

const queuedInputs = {
  up: false,
  down: false,
  left: false,
  right: false,
}

window.addEventListener('keydown', startMoving)
window.addEventListener('keyup', stopMoving)

setInterval(() => {
  if (queuedInputs.left) {
    players[ 0 ].x -= 10
  }
  if (queuedInputs.down) {
    players[ 0 ].y += 10
  }
  if (queuedInputs.up) {
    players[ 0 ].y -= 10
  }
  if (queuedInputs.right) {
    players[ 0 ].x += 10
  }
}, 60)
// end INPUTS


// iight create shit
const ctx = Sketch.create({
  fullscreen: true,
})

// THIS IS WHERE WE DRAW SHIT
const render = () => {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    for (let i = 0; i < players.length; i++) {
      ctx.drawImage(character, players[ i ].currentFrame, 0, 32, 32, players[ i ].x, players[ i ].y, 128, 128)
      players[ i ].nextFrame()
      
    }
  }
}

const gameLoop = () => {
  render()
  window.requestAnimationFrame(gameLoop)
  players = client.getPlayers()
}


character.onload = function() {
  client.connect()
  ctx.start = gameLoop
  ctx.start()
}

character.src = require('./sprites/Player.png')