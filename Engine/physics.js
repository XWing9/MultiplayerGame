//class to caclulate and handle physics related stuff
//also class to handle physics_process frames
export class Physics{
    constructor(fixedFPS){
        this.fixedDelta = 1000 / fixedFPS  // Convert FPS to milliseconds (e.g., 60 FPS → ~16.67 ms)
        this.physicsAccumulator = 0
    }

    
    updatePhysics(physicsList, delta){
        this.physicsAccumulator += delta * 1000 

        while(this.physicsAccumulator >= this.fixedDelta){
            for(const func of physicsList){
                func(this.fixedDelta / 1000)
            }
            this.physicsAccumulator -= this.fixedDelta

            //add thing to check collision
        }
    }

    checkEntityPos(){
        array.forEach(element => {
            
        });
    }
}