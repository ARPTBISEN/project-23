class Stone{
    constructor(x,y,radius,option){
        var option={
            'restitution':0.4,
            'friction':0.5,
            'density':1.0,
        
        }
        this.body=Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
        
    }
    display(){
        var angle=this.body.angle;
         var pos=this.body.position;
         ellipseMode(RADIUS)

         push();
        //  translate(this.body.position.x,this.body.position.y)
         rotate(angle)
         fill ("gray") ;
         ellipse(pos.x,pos.y,30);
         pop();

    }
}