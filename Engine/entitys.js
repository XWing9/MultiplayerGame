export class Entity{
    constructor(name,x,y,image){
        this.name = name
    
        this.x = x
        this.y = y
        this.image = image

        this.height = image.width
        this.width = image.height
    }

    get Collision(){
        const scale = 1.1

        const newWidth = this.width * scale
        const newHeight = this.height * scale

        const offsetX = (newWidth - this.width) /2
        const offsetY = (newHeight - this.height) /2

        return {
            x: this.x - offsetX,
            y: this.y - offsetY,
            width: newWidth,
            height: newHeight
        }
    }

    isColliding(other){
        const a = this.Collision
        const b = other.Collision

        return !(
            a.x + a.width < b.x ||
            a.x > b.x + b.width ||
            a.y + a.height < b.y ||
            a.y > b.y + b.height
        )
    }
}