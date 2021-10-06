class Paper{
    constructor(x,y){
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0,
            'density': 1.2
        }
        this.x = x;
        this.y = y;
        this.r = 25;
        this.image = loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, 25, options);
        World.add(world, this.body);
    }
    display(){
        var paperPoss= this.body.position;
        push()
        translate(paperPoss.x, paperPoss.y);
        imageMode(CENTER);
        strokeWeight(3);
        stroke("white");
        fill("white");
        scale(2.9);
        image(this.image,0,0,this.r,this.r);

        pop()
    }
}