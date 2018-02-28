var numTrees = 30;

function setup() {
    createCanvas(1000, 890);
    background(75,88,167);
}

function draw() {
    //cliff
    stroke(84,84,84)
    fill(84,84,84)
    rect(000, 500, 500, 500);
    quad(500,890, 500,500, 850,500, 500,890);
    rect(500,475, 349,35);
    //grass
    stroke(24,158,73);
    fill(24,158,73);
    quad(0,890, 60,500, 600,500, 600,500);
    rect(500,475, 99,26);
    rect(599,475, 250,10);
    //path
    stroke(24,158,73);
    fill(105,105,105);
    quad(0,890, 300,500, 200,500, 400,500);   
    
    drawlighthouse ();
    
    drawpath ();
}

function drawlighthouse (){
    //roof
    stroke(85,85,85);
    fill(85,85,85);
    ellipse(726,120, 150,100);
    //light
    stroke(0,0,0);
    fill(255,255,0);
    rect(663,188, 125,-60);
    //tower
    stroke(255,255,255);
    fill(255,255,255);
    rect(650,439, 150,35);
    rect(663,474, 125,-250);
    rect(650,188, 150,35);
    rect(650,120, 150,30);
    //stripe
    stroke(255,255,255);
    fill(163,27,27);
    rect(663,250, 125, 35);
}

function drawpath (){
    var x = 400;
    var y = 450;
    for(i=0; i<7; i++){
        x_offset = i*-40;
        y_offset = i*40;
        stroke (0);
        fill (0);
        rect(x+x_offset,y+y_offset, 10,50);
        stroke (0);
        fill (255,255,0);
        ellipse (x+5+x_offset,y-7+y_offset, 15,20);

    }
}