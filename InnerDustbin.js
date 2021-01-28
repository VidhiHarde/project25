
class InnerDustbin{
    constructor(x,y,width,height){
       
    this.dustbinBody=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World.add(world,this.dustbinBody);
    this.image=loadImage("dustbingreen.png")
    }
    display(){
     var pos=this.dustbinBody.position;
    push()
    translate(pos.x,pos.y);
    fill(0);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    }
    }