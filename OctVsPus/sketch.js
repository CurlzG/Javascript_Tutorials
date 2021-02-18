let mc;
let att = [];
let soundClassifier;
let aImg;
let mImg;
let bImg;

function preload(){
  bImg = loadImage('background.gif');
  aImg = loadImage('att.gif');
  mImg = loadImage('main.gif');
  const options= {probabilityThreshold: 0.95};
  soundClassifier  = ml5.soundClassifier('SpeechCommands18w',options)
}

function setup() {
  createCanvas(800, 600);
  mc = new mChar();
  soundClassifier.classify(gotCommand);
}
function gotCommand(error,results){
  if(error){
    console.error(error);
  } 
  if(results[0].label =='stop'){
    noLoop();
  }
}
function keyPressed(){
  if(key == ' '){}
  mc.jump();
}
function draw() {
  if(random(1) < 0.01){
    if(att.length != 0){
      if(att[att.length-1].getX() < 450){
        att.push(new attacker());
      }
    } else {
      att.push(new attacker());
    }
  
    
  }
  background(bImg);
  mc.show();
  mc.move();
  for(let t of att){
    t.show();
    t.move();
    if(mc.hits(t)){
      console.log('game over');
      //noLoop();
    }
  }
}