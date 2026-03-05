//class to caclulate and handle physics related stuff
//also class to handle physics_process frames
export class Physics{
    constructor(fixedFPS){
        this.fixedDelta = 1000 / fixedFPS  // Convert FPS to milliseconds (e.g., 60 FPS → ~16.67 ms)
        this.physicsAccumulator = 0
    }

    
    updatePhysics(physicsList, delta,entityList){
        this.physicsAccumulator += delta * 1000 

        while(this.physicsAccumulator >= this.fixedDelta){
            for(const func of physicsList){
                func(this.fixedDelta / 1000)
            }
            this.physicsAccumulator -= this.fixedDelta

            //add thing to check collision
            this.checkEntityPos(entityList)
        }
    }

    checkEntityPos(entityList){
        for (let i = 0; i < entityList.length; i++) {
            const entityA = entityList[i];

            for (let j = i + 1; j < entityList.length; j++) {
                const entityB = entityList[j];

                if(entityA.isColliding(entityB)){
                    entityB.x = entityB.x - 1
                    //console.log("entity is colliding?")
                    //console.log(entityA)
                    //console.log(entityB)

                } else {
                    console.log("entity is not colliding?")
                }
            }
        }
    }
}