class Hammer extends Box{
    constructor(x,y,width,height,option){
      super(x,y,width,height,option)
      
    }
    display(){
       this.body.position.x=mouseX;
       this.body.position.y=mouseY;
       super.display();
       
    }
}