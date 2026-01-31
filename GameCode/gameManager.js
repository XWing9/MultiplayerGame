import { engine } from "../Engine/engineManager.js"


export class GameManager{
    constructor(){
        this.playerMovement()
        this.createPLayer()
    }
    
    playerMovement(){
        engine.updateQueue.push((delta) =>{
            if(engine.isKeyDown("KeyW")){
                console.log("lol it works")
            }
        })
    }

    createPLayer(){
        engine.createEntity("player",50,50)
    }
}