function addPoints(otherPoint)
{
    this.x = this.x + otherPoint.x;
    this.y = this.y + otherPoint.y;
    console.log('other: ' + otherPoint.x);
}

var point1 =
{
    x: 3,
    y: 5,
    add: addPoints
};

var point2 =
{
    x: 1,
    y: 1,
    add: addPoints
};

// add 3,5 to 1,1
point1.add(point2);

// shows 4,6
console.log(point1.x + "," + point1.y); 
