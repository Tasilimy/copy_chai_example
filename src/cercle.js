class cercle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getDescription() {
        return `Cercle de rayon ${this.radius}, de couleur ${this.color}, centré en (${this.x}, ${this.y})`;
    }
}

module.exports = {
    cercle: cercle
};
