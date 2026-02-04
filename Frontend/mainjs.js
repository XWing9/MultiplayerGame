import {engine} from "../Engine/engineManager.js"
import { gameManager } from "../GameCode/gameManager.js"

const gameCanvas = document.getElementById("gameCanvas")

const connectToServer = document.getElementById("connectToServer")
const startGame = document.getElementById("startGame")

connectToServer.addEventListener("click",startBackend )
startGame.addEventListener("click",startEngine)

async function startEngine(){
    //starts the engine of the game in the background
    await engine.startEngine(gameCanvas)

    await gameManager.start()
}

async function startBackend(){
    //connect to backend server
    console.log("comming soon")
}