//class to handle _process frames
export class Frames{
    constructor() {
        this.FPS = 60

        this.running = false
        this.lastTime = 0
        this.delta = 0
        this.frameInterval = 1/this.FPS
    }

    startLoop() {
        this.running = true
        this.lastTime = performance.now()
        requestAnimationFrame(this.loop)
    }

    loop = (time) => {
        if (!this.running) return

        const currentFrame = time / 1000
        this.delta = currentFrame - this.lastTime
        this.lastTime = currentFrame

        //makes sure loop keeps running in the background
        //console.log("Frame")
        requestAnimationFrame(this.loop)
    }

    //werererer

    getDelta(){
        return this.delta
    }

}