class attacker{
  constructor(){
    this.r = 50;
    this.x = 650;
    this.y = 550;
    this.vy = 0;
  }
  move(){
    this.x -= 3;
  }
  show(){
    image(aImg,this.x, this.y,this.r,this.r);
  }
  getX(){
    return this.x;
  }
}