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
  insert(value){
    //Code from Medium Article about Binary Trees https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b
    var newNode = new Node(value,xpos,ypos);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    let current = this.root;
    while(current){
        if(value === current.value) return undefined;
        if(value < current.value){
            if(current.left === null){
                current.left = newNode;
                xpos = xpos-35;
                ypos = ypos + 40;
                current.left.x = xpos;
                current.left.y = ypos;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                xpos = xpos + 35;
                ypos = ypos + 40;
                current.right.x = xpos;
                current.right.y = ypos;
                return this;
            } 
            current = current.right;
        }
    }
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