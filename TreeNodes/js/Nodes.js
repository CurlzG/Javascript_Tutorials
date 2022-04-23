class Node{
  constructor(value,x,y){
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
  }
}
let xpos = 250;
let ypos = 250;
class BST {
  constructor(){
    this.root = null;
  }
}
//Adding the Nodes In
function insert(root,value){
  
  //If the value is smaller 
  if(root.value < value){
    //If there is not a value add the new node
    if(root.right === null){
      xpos = xpos + 35;
      ypos = ypos + 40;
      root.right = new Node(value,xpos,ypos);
    }
    //If there is a value go to the next stage
    insert(root.right,value)
  }
   //If the value is smaller 
  if(root.value > value){
 //If there is not a value add the new node
    if(root.left === null){
      xpos = xpos - 35;
      ypos = ypos + 40;
      root.left = new Node(value,xpos,ypos);
    }
  //If there is a value go to the next stage
    insert(root.left,value)
  }
  
  
}


const arr = [1,6,2,8,10,25,15,12,13,11];
const root = new Node(0,250,250);
for(let i = 0; i < arr.length;i++){
  insert(root,arr[i]);
}
export {root};