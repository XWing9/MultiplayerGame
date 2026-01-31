//class to handle _process frames
export class Frames{
    //delta = elapsed time since the last frame
    constructor(onUpdate) {
        this.FPS = 60
        this.running = false
        this.lastTime = 0
        this.delta = 0

        this.onUpdate = onUpdate
    }

    startLoop() {
        this.running = true
        this.lastTime = performance.now()
        requestAnimationFrame(this.loop)
    }

    //delta calc
    loop = (time) => {
        if (!this.running) return

        const currentFrame = time / 1000
        this.delta = currentFrame - this.lastTime
        this.lastTime = currentFrame

        if(this.onUpdate){
            this.onUpdate(this.delta)
        }
        //makes sure loop keeps running in the background
        //console.log("Frame")
        requestAnimationFrame(this.loop)
    }
}