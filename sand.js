class Sand{
    constructor(x,y,radius,option){
        var option={
            'restitution':0,
            'friction':0,
            'density':0.1,
        
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
         fill ("yellow") ;
         ellipse(pos.x,pos.y,9);
         pop();

    }
}