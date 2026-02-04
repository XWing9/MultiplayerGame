import { engine } from "../Engine/engineManager.js"

class GameManager{
    constructor(){}
    
    async start(){
        const playerImg = await engine.loadImage(
            "playerImg",
            "../images/character/player.png"
        )

        const testPLayerImg = await engine.loadImage(
            "testPlayerImg",
            "../images/character/testPlayer.png"
        )

        this.testPLayer = engine.createEntity(
            "testPLayer",
            100,
            100,
            testPLayerImg
        )

        this.player = engine.createEntity(
            "player",
            50,
            50,
            playerImg
        )
        this.playerMovement()
    }

    playerMovement(){
        //diagonal movement can fow now only be prevented like this
        engine.physicsQueue.push((delta) =>{
            if (engine.isKeyDown("KeyW")) {
                this.player.y -= 50 * delta
            } else if(engine.isKeyDown("KeyS")) {
                this.player.y += 50 * delta
            } else if(engine.isKeyDown("KeyA")) {
                this.player.x -= 50 * delta
            } else if(engine.isKeyDown("KeyD")) {
                this.player.x += 50 * delta
            }
        })
    }
}

export const gameManager = new GameManager() 