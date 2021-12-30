canv = document.getElementById("canv");
ctx = canv.getContext("2d");


class Bubble {
    constructor(){
        this.y = 50,
        this.x = 50,
        this.radius = 15,
        this.color = "white"
    }
    randomizecolor(){
     let random = Math.random();
     if (random < 0.1){
         this.color = "red";
     }
     else if(random < 0.2 && random > 0.1){
         this.color = "orange";
     }
     else if(random <0.3 && random > 0.2){
         this.color = "yellow";
     }
     else if (random < 0.4 && random > 0.3){
         this.color = "green";
     }
     else if(random < 0.5 && random > 0.4){
         this.color = "blue";
     }
     else if(random < 0.6 && random > 0.5){
         this.color ="purple";
     }
     else if(random < 0.7 && random > 0.6){
         this.color = "white";
     }
     else if(random < 0.7 && random > 0.6){
         this.color = "teal";
     }
     else if(random < 0.8 && random > 0.7){
         this.color = "lime"
     }
     else if (random < 0.9 && random > 0.8){
         this.color = "pink";
     }
     else if(random > 0.9){
         this.color= "magenta";
     }

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
    restart(){
        this.color = "white";
        this.x = 25;
        this.y = 25;
        this.radius = 15;
    }
    checkpos(){
        if(this.x-this.radius < 0){
            this.restart();
        }
        if(this.x + this.radius > 700){
            this.restart();
        }
        if(this.y + this.radius > 500){
            this.restart();
        }
        if (this.y - this.radius < 0){
            this.restart();
        }
        
    }
    getbigger(){
        this.radius = this.radius + 5;
    }


}
class eatee {
    constructor(){
        this.y = 350,
        this.x = 250,
        this.radius = 10,
        this.color = "black",
        this.xvec = 3,
        this.yvec = 3
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
    restart(){
        this.x = 350;
        this.y = 250;
        this.color = "black";
        if(Math.random < 0.5){
            this.xvec = this.xvec * -1;
        }
        else{
            this.xvec = this.xvec * 1;
        }
        if(Math.random > 0.5){
            this.yvec = this.yvec * 1;
        }
        else{
            this.yvec = this.yvec * -1;
        }
        let random = Math.random();
        if (random < 0.1){
            this.color = "red";
        }
        else if(random < 0.2 && random > 0.1){
            this.color = "orange";
        }
        else if(random <0.3 && random > 0.2){
            this.color = "yellow";
        }
        else if (random < 0.4 && random > 0.3){
            this.color = "green";
        }
        else if(random < 0.5 && random > 0.4){
            this.color = "blue";
        }
        else if(random < 0.6 && random > 0.5){
            this.color ="purple";
        }
        else if(random < 0.7 && random > 0.6){
            this.color = "white";
        }
        else if(random < 0.7 && random > 0.6){
            this.color = "teal";
        }
        else if(random < 0.8 && random > 0.7){
            this.color = "lime"
        }
        else if (random < 0.9 && random > 0.8){
            this.color = "pink";
        }
        else if(random > 0.9){
            this.color= "magenta";
        }
    }
    moveblob(){
        this.x = this.x + this.xvec;
        this.y = this.y + this.yvec;
        if(this.y > 500 || this.y < 0){
            this.yvec = this.yvec *-1;
        }
        if(this.x > 700 || this.x < 0){
            this.xvec = this.xvec * -1;
        }
    }
}
let bubble = new Bubble;
let eat = new eatee;

document.addEventListener("keydown", keyDown);
function keyDown(/** @type {KeyboardEvent} */ ev){
    switch (ev.keyCode){
        case 37:
           bubble.x -=10;
           break;
        case 38:
            bubble.y -= 10;
            break;
        case 39:
            bubble.x += 10;
            break;
        case 40:
            bubble.y += 10;
            break;
    }

}


function pythagorate(){
    let bigx = bubble.x - eat.x;
    let bigy = bubble.y - eat.y;
    let powx = Math.pow(bigx, 2);
    let powy = Math.pow(bigy, 2);
    let biggy = Math.sqrt(powy+powx);
    if(biggy < bubble.radius + eat.radius){
        eat.restart();
        bubble.randomizecolor();
        bubble.getbigger();
        
    }
    return biggy;
}

function calcscore (){
    let score = ((bubble.radius - 15)/5);
    document.getElementById("Scorething").innerText = score;

    
    
}

function animate(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.width);

    requestAnimationFrame(animate);

    bubble.checkpos();
    bubble.draw();
    eat.draw();
    eat.moveblob();
    pythagorate();
    
    calcscore();
    
    

}
eat.restart();
animate();