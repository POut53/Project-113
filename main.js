function setup(){
 canvas=createCanvas(640,480);
 canvas.postion(150,150);
 video=createCapture(VIDEO);
 video.hide();
}
function draw(){
  image(video,230,150,220,200);
  fill(255,0,0);
  stroke(255,0,0);
  circle(50,50,80);
  fill(0,128,0);
  stroke(0,128,0);  
  rect(90,40,460,20);
  rect(90,40,460,20);
}
function setup(){
    canvas=createCanvas(450,350);
    canvas.position(70,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    }
    function draw(){
     image(video,0,0,450,350);
     tint(tint_color);
    }
    function filter_color(){
        tint_color=document.getElementById("input").value;
    }
    function takesnapshot(){
      save('neev.png');
    }