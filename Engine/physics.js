//class to caclulate and handle physics related stuff
//also class to handle physics_process frames
export class Physics{
    constructor(fixedDelta){
        this.fixedDelta = 60
        this.physicsAccumulator = 0
    }
    
    updatePhysics(physicsList,delta){
        this.physicsAccumulator += delta

        while(this.physicsAccumulator >= this.fixedDelta){
            for(const func of physicsList){
                func(this.fixedDelta)
            }
            this.physicsAccumulator -= this.fixedDelta
        }
    }
}