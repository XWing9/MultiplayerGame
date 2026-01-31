export class InputManager{
    constructor(){
        this.trackInput()
    }
    
    trackInput(){
        console.log("tracker entered")
        window.addEventListener("keydown", (e) => {
            if(e.code == "KeyW"){
                console.log("Wpressed")
            }
        })
    }
}