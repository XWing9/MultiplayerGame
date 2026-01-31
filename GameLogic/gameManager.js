export class GameManager{
    constructor(){
        this.InputManager = new InputManager
    }

    trackMovement(){
        this.InputManager.trackInput()
    }
}