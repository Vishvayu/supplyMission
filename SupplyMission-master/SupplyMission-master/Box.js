class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.body.x=x
        this.body.y=y
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
display(){
    var pos =this.body.position;
    this.body.shapeColour="red";
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}
}