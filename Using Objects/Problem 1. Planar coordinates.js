/* Problem 1. Planar coordinates

 Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates P(X, Y)
 Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 Calculate the distance between two points.
 Check if three segment lines can form a triangle.
 */

function Point(x, y) {
    if (!(this instanceof Point)) {
        return new Point(x, y);
    }
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return 'Point(' + this.x + ',' + this.y + ')';
};

function Line(sPoint, ePoint) {
    if (!(this instanceof Line)) {
        return new Line(sPoint, ePoint);
    }
    this.sPoint = sPoint;
    this.ePoint = ePoint;
}

Line.prototype.getDistance = function() {
    var x = (this.sPoint.x - this.ePoint.x) * (this.sPoint.x - this.ePoint.x);
    var y = (this.sPoint.y - this.ePoint.y) * (this.sPoint.y - this.ePoint.y);

    return Math.sqrt(x + y);
};

Line.prototype.toString = function() {
    return 'L[' + this.sPoint.toString() + ',' + this.ePoint.toString() + ']';
};

function Triangle(a, b, c) {
    if (!(this instanceof Triangle)) {
        return new Triangle(a, b, c);
    }

    if (!canBeTriangle(a, b, c)) {
        throw  new Error('invalid triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
}

function canBeTriangle(a, b, c) {
    return a.getDistance() < b.getDistance() + c.getDistance() &&
        b.getDistance() < c.getDistance() + a.getDistance() &&
        c.getDistance() < a.getDistance() + b.getDistance();
}


var pA = new Point(2, 2),
    pB = new Point(3, 4),
    pC = new Point(5, 6),
    lineA = new Line(pA, pB),
    lineB = new Line(pB, pC),
    lineC = new Line(pC, pA),
    triangle = new Triangle(lineA, lineB, lineC);


console.log('Can form triangle from lineA, lineB and lineC?: '+canBeTriangle(lineA, lineB, lineC));
