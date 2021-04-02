function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.hide();
}
    
    function draw(){

        rect(20, 20, 600, 440, 20);

        fill(255, 0, 0);
        circle(30, 30, 50);
        circle(30, 450, 50);
        circle(600, 30, 50);
        circle(600, 450, 50);


        image(video, 70, 40, 500, 400);

    }
    
    function take_snapshot(){
        save('MyTintImage.png');
    }
    
