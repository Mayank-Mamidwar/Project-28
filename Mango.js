class Mango {
    constructor(x, y, radius, height) {
        var options = {
            'isStatic': true,
            'restitution': 0,
            'friction': 1,
            
        }
        this.radius = radius;
        this.height = height
        this.body = Bodies.circle(x, y, radius, options)
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var diameter = 2 * (this.radius);
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.height);
        pop();
    }
}