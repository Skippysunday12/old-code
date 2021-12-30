canv = document.getElementById("canv");
ctx = canv.getContext("2d");

let xd = 0;
let yd = 0;
let rawhypx = 0;
let rawhypy = 0;
let rawhyp = 0;
let hyp = 0;

class BUBBLE {
    constructor(){
        this.x = canv.width / 2,
        this.y = canv.height / 2,
        this.radius = 50,
        this.color = "white"
    }
    draw(){
        ctx.moveTo(this.x, this.y);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
    }
}

function redraw() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canv.width, canv.height);
}

function pygorean(){
    xd = bubble.x - bb.x;
    yd = bubble.y - bb.y;
    rawhypx = Math.pow(xd, 2);
    rawhypy = Math.pow(yd, 2);
    hyp = Math.sqrt(rawhypx + rawhypy);
    return hyp;
}

function cd(){
    if (pygorean() <100){
        bb.color = "blue";
        bubble.color = "purple";
    }
    else{
        bb.color = "yellow";
        bubble.color = "green";
    }
}
document.addEventListener("keydown", keyDown);


let bb = new BUBBLE();
let bubble = new BUBBLE();

function keyDown(/** @type {KeyboardEvent} */ ev){
    switch (ev.keyCode){
        case 37:
           bubble.x -=5;
           break;
        case 38:
            bubble.y -= 5;
            break;
        case 39:
            bubble.x += 5;
            break;
        case 40:
            bubble.y += 5;
            break;
    }

}


function animate(){
    redraw();
    requestAnimationFrame(animate);

    bb.draw();
    bubble.draw();
    cd();


}

animate();