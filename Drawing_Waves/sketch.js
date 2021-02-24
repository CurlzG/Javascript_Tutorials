let w;
class Wave{
  constructor(amp,period,phase){
    this.amp = amp;
    this.period = period;
    this.phase = phase;
  }
  evaluate(x){
    return sin(this.phase + (TWO_PI * x)/this.period)* this.amp;
  }
  update(){
    this.phase += 0.5;
  }
}

function setup() {
  createCanvas(600, 400);
  w = new Wave(150,200,10);
}
let count = 0;
function draw() {
  background(0);
  
  for(let x = 0; x < width; x+= 5){
    let y = w.evaluate(x);
    count++;
    noStroke();
    
    //console.log(count);
    if(isEven(count)){
      fill("#c6ff89");
    } else {
      fill("#89a3ff");
    }
    ellipse(x,y+height/2,16);
    w.update();
  }
  
}
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

