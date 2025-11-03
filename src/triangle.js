class triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getArea() {
        return this.base * this.height / 2;
    }
}   

module.exports = {
    triangle: triangle
}