function setup() {
    createCanvas(500, 500);
}

function draw() {
    noStroke();
    for (var x = 1; x <= 100; x++) {
        for (var y = 1; y <= 100; y++) {
            if((x+y)%2==0) fill(100,149,237);
            else fill(175,238,238)
            rect(x * 5, y * 5, 5, 5);
        }
    }
}s