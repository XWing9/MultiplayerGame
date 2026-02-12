import { Graphics } from "./drawing.js"
import { Physics } from "./physics.js"
import { Frames } from "./loop.js"
import { InputManager } from "./InputManager.js"
import { NetworkManager } from "./networking.js"
import { Entity } from "./entitys.js"

//entry point of the engine
class EngineManager{
    constructor(){
        this.Graphics = null
        this.Physics = null
        this.Frames = null
        this.InputManager = null
        this.NetworkManager = null
        this.Entity = null

        this.updateQueue = []
        this.physicsQueue = []
        this.entityList = []

    }

    startEngine = async (gameCanvas) => {
        this.Graphics = new Graphics(gameCanvas)
        this.NetworkManager = new NetworkManager

        await this.Graphics.loadImage(
            "background","../images/gameAssets/background.png"
        )

        await this.Graphics.loadImage(
            "ball","../images/gameAssets/ball.png"
        )

        this.createEntity(
            "ball",
            142, //change pos to dynamic pos
            67,
            this.Graphics.images.get("ball")
        )

        //directly starts the main loop and all relevant sub loops that are needed
        this.Frames = new Frames((delta) => {
            //add network to
            this.sendData()
            this.update(delta)
            this.physicsUpdate(delta)
            this.draw(gameCanvas)
        })
        this.Frames.startLoop()

        this.Physics = new Physics(60)

        this.InputManager = new InputManager()

        console.log("engine started!")
    }

    sendData(){
        this.NetworkManager.sendPlayerPos(this.entityList)
    }

    update(delta){
        for (const func of this.updateQueue){
            func(delta)
        }
    }

    physicsUpdate(delta){
        this.Physics.updatePhysics(this.physicsQueue,delta)
    }
    
    //change to generall draw function
    draw(){
        if(!this.Graphics){
          console.log("engine isnt started!")
          return  
        }

        this.Graphics.drawBackground("background",0,0)
        
        for(const entity of this.entityList){
            this.Graphics.drawEntitys(entity)
        }

        //console.log("drawed")
    }

    createEntity(name,x,y,Image){
        const entity = new Entity(name,x,y,Image)
        this.entityList.push(entity)
        return entity
    }

    //wrapper methods
    isKeyDown(key){
        return this.InputManager.isKeyDown(key)
    }

    async loadImage(name,src){
        return await this.Graphics.loadImage(name,src)
    }
}

//makes it into goddot singelton version more or less
export const engine = new EngineManager()

//engine flow:
//1. Network sync
//2. Game logic update
//3. Submit render commands
//4. Renderer sorts by layer
//5. Renderer draws everything

//Render FPS = how often we LOOK
//Physics FPS = how often the WORLD changes