class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options)
        this.radius=30;
        this.image=loadImage("PAPER1.png")
        
        World.add(world,this.body)

    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
    
        
    }
}
