// const ANIMATION_LIST = {
//   idle:
// }

class Entity {
  constructor(id, x, y, frameSize) {
    this.id = id
    this.x = x
    this.y = y
    this.frameSize = frameSize
    this.faceDirection = 'left'
    this.currentFrame = 0
  }

  setFaceDirection(dir) {
    this.faceDirection = dir
  }

  getCurrentFrame() {
    return this.currentFrame
  }

  setCurrentFrame(frame) {
    this.currentFrame = frame
  }

}

export default Entity