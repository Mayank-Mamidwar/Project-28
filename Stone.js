class Stone {
    constructor(x, y, radius) {
        var options = {
            'isStatic': false,
            'restitution': 0,
            'friction': 1,
            'density': 1.2,
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options)
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var diameter = 2 * (this.radius);
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(0, 0, diameter, diameter);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
    }
}