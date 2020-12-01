class Plinko{

    constructor(x,y,radius){

        var options={
        isStatic:true,
        friction:0.1,
        restitution:1,
        }

        this.radius =radius;

        this.body =Bodies.circle(x,y,radius,options);

        World.add(world,this.body);
    }

    display()
    {
        var pos =this.body.position;
        var angle =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }


}

    