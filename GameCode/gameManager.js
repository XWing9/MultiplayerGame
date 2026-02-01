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
        engine.updateQueue.push((delta) =>{
            const player = engine.entityList.find(e => e.name === "player")
            if (!player) return
            if (engine.isKeyDown("KeyW")) {
                player.y -= 150 * delta
            }
        })
    }
}

export const gameManager = new GameManager() 