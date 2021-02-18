class mChar{
  constructor(){
    this.r = 50;
    this.x = this.r;
    this.y = height-this.r;
    this.vy = 0;
    this.gravity = 0.5;
  }
  jump(){
    if(this.y == 550){
    this.vy = -15;
    }
  }
  hits(attacker){
     return collideRectRect(this.x, this.y, this.r, this.r, attacker.x, attacker.y, this.r, this.r);
  }
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y,0, height-this.r);
  }
  show(){
    image(mImg,this.x, this.y,this.r,this.r);
  }
}