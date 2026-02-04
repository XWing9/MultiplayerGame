export class Graphics{
    //clean this up and
    //build real graphics pipeline by adding stuff to the queue etc
    constructor(gameCanvas){
        this.canvas = gameCanvas
        this.brush = gameCanvas.getContext("2d")
        this.brush.imageSmoothingEnabled = false  // Disable bilinear filtering for crisp pixels
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

    drawEntitys(entity){
        this.brush.drawImage(
            entity.image,
            entity.x,
            entity.y
        )
    }

    drawBackground(name,x,y){
        const img = this.images.get(name)
        this.brush.drawImage(img,x,y,this.canvas.width,this.canvas.height)
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

    //make real pipeline able to render everything
    renderingPipe(){

    }
}