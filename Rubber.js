class Rubber{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        strokeWeight(3);
        stroke("black");
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("darkblue");
        ellipse(0,0,this.r);
        pop();
    }
}