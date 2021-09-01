import Entity from "./entity"
const frameSize = 32
const frameCap = 64
const frameTick = 10
class Player extends Entity {
  constructor(id, x, y) {
    super(id, x, y, frameSize)
    this.currentTick = 0
  }

  nextFrame() {
    if (this.currentTick >= frameTick) {
      this.currentTick = 0
      const currentFrame = Entity.prototype.getCurrentFrame.call(this)
      // console.log(currentFrame)
      if (currentFrame >= frameCap) {
        super.setCurrentFrame(0)
      } else {
        super.setCurrentFrame(currentFrame + frameSize)
      }
      
    }
    this.currentTick++
  }

}

export default Player