class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,restitution:0.8,friction:10}
        this.visibility = 255;

        this.body=Bodies.rectangle(x,y,width,height ,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    score(){
        if(this.visibility<0 && this.visibility >-105){           
          score++;
        }
      }

    display(){
         //console.log(this.body.speed);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        
        this.visibility = this.visibility -5;
        tint(255,this.visibility)
        console.log(this.visibility)
       
        
      }
    }
}