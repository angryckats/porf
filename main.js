function preload(){}






function setup(){
    canvas=createCanvas (600,400)
    canvas.position(100,200)
    video=createCapture(VIDEO) 
    video.hide()
    tintcolor=""
}





function draw(){
image(video,0,0,600,400)
tint(tintcolor)
fill("green")
rect(10,10,10,380)
rect(580,10,10,380)
rect(10,10,580,10)
rect(10,380,580,10)

fill("red")
circle(10,10,50)
circle(580,10,50)
circle(10,380,50)
circle(580,380,50)
}


function apply(){
tintcolor=document.getElementById("color").value
}

function take_snapshot(){
save("alastor.jpg")
}
