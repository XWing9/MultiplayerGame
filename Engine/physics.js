//class to caclulate and handle physics related stuff
//also class to handle physics_process frames
export class Physics{
    constructor(fixedDelta){
        this.fixedDelta = 60
        this.physicsAccumulator = 0
        this.physics = []
    }

    addPhysicsToQueue(func){
        this.physics.push(func)
    }
    
    updatePhysics(delta){
        this.physicsAccumulator += delta

        while(this.physicsAccumulator >= this.fixedDelta){
            for(const func of this.addPhysicsToQueue){
                func(this.fixedDelta)
            }
            this.physicsAccumulator -= this.fixedDelta
        }
    }
}