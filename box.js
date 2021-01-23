class Box{
    constructor(x,y,width,height,option){
        var option={
            'restitution':0.4,
            'friction':0.5,
            'density':1.0,
        
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
    display(){
        var angle=this.body.angle;
         var pos=this.body.position;
         rectMode(CENTER)

         push();
        //  translate(this.body.position.x,this.body.position.y)
         rotate(angle)
         fill ("brown") ;
         rect(pos.x,pos.y,this.width,this.height);
         pop();

    }
}