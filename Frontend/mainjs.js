import {engine} from "../Engine/engineManager.js"
import { gameManager } from "../GameCode/gameManager.js"

const gameCanvas = document.getElementById("gameCanvas")

const startGame = document.getElementById("startGame")
const drawFIeld = document.getElementById("drawField")

startGame.addEventListener("click",startEngine)
drawFIeld.addEventListener("click",drawField)

async function startEngine(){
    //starts the engine of the game in the background
    await engine.startEngine(gameCanvas)

    await gameManager.start()
}

function drawField(){
    engine.draw(gameCanvas)
}