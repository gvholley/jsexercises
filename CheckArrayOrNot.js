//Check if an object is an array or not

var arrayList = [1 , 2, 3];

function greet(param) {
  if(typeof param === 'string') {
    return "String!!!!"
  }
  else {
    return "Not a string!!!"
  }
}

console.log(greet([1, 2]))
