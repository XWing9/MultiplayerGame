import { Graphics } from "./drawing.js"
import { Physics } from "./physics.js"
import { Frames } from "./loop.js"
import { InputManager } from "./InputManager.js"

//entry point of the engine
class EngineManager{
    constructor(){
        this.Graphics = null
        this.updateQueue = []
        this.physicsQueue = []
    }

    startEngine = async (gameCanvas) => {
        this.Graphics = new Graphics(gameCanvas)
        
        await this.Graphics.loadImage(
            "player","../images/character/player.png"
            
        )

        await this.Graphics.loadImage(
            "testPlayer","../images/character/testPlayer.png"
        )

        this.Frames = new Frames((delta) => {
            //add network to
            this.update(delta)
            this.physicsUpdate(delta)
            this.draw(gameCanvas)
        })
        this.Frames.startLoop()

        this.Physics = new Physics(60)

        this.InputManager = new InputManager()
        this.InputManager.trackInput()

        console.log("engine started!")
    }

    update(delta){
        //executes the functions itself from the array
        for (const func of this.updateQueue){
            func(delta)
        }
    }

    physicsUpdate(delta){
        //call stuff in physics to update... well physics
        this.Physics.updatePhysics(delta)
    }
    
    //change to generall draw function
    draw(gameCanvas){
        if(!this.Graphics){
          console.log("engine isnt started!")
          return  
        } 

        this.Graphics.changeCanvasBackground("black")
        this.Graphics.drawCircle(200,70,20,"blue")

        this.Graphics.drawImage("player",50,50)
        this.Graphics.drawImage("testPlayer",100,100)

        console.log("drawed")
    }

    drawPlayer(playerPos){

    }
}

export const engine = new EngineManager()

//engine flow:
//1. Network sync
//2. Game logic update
//3. Submit render commands
//4. Renderer sorts by layer
//5. Renderer draws everything

//Render FPS = how often we LOOK
//Physics FPS = how often the WORLD changes