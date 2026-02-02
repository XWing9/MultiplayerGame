export class Graphics{
    //clean this up and
    //build real graphics pipeline by adding stuff to the queue etc
    constructor(gameCanvas){
        this.canvas = gameCanvas
        this.brush = gameCanvas.getContext("2d")
        this.queue = []
        this.images = new Map() //dictionary

    }

    //loads one image
    loadImage(name,src){
        return new Promise((resolve, reject) => {
            if(this.images.has(name)){
                return this.images.get(name)
            }

            const img = new Image()
            img.src = src

            img.onload = () =>{
                this.images.set(name, img) //writes key and img into dict
                resolve(img)
            }

            img.onerror = () =>{
                reject(`Failed to load image: ${src}`)
            }
        })
    }

    getImage(name){
        return this.images.get(name)
    }

    drawEntitys(entity){
        this.brush.drawImage(
            entity.image,
            entity.x,
            entity.y
        )
    }

    //depending on render function remove
    drawImage(name,x,y){
        const img = this.images.get(name)

        if (!img){
            console.log("image not found!", name)
            return
        }
        this.brush.drawImage(img,x,y)
        //console.log("image should be drawn")
    }

    //remove
    changeCanvasBackground(color){
        this.brush.fillStyle = color
        this.brush.fillRect(0,0, this.canvas.width, this.canvas.height)
    }

    //remove
    drawCircle(x,y,radius,color){
        this.queue.push({type: "circle",x,y,radius,color})
        this.render()
    }

    //renderPipe will replace this
    render(){
        //draw queued commands
        for (const command of this.queue){
            if (command.type === "circle"){
                this.brush.fillStyle = command.color
                this.brush.beginPath();
                this.brush.arc(command.x, command.y, command.radius, 0, Math.PI * 2);
                this.brush.fill();
            }
        }
        this.queue = []
    }

    //make real pipeline able to render everything
    renderingPipe(){

    }
}