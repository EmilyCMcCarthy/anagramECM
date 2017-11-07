
var Dictionary = require('oxford-dictionary-api');
const { app_id, app_key } = require('./secrets.js');

var dict = new Dictionary(app_id,app_key);
dict.find("hellozzzz", function(error,data){
    if(error) return console.log(error); console.log(data);
})

var reg = /[a-zA-Z]/g
function lettersSortSplit(s){
    var arr = s.match(reg).sort().filter (function(elem){
       return elem !== ' '
    }) 
    return arr;
}

var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (array, output, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};


var print = function(input){

  console.log(input);
  var str = "";
  for(let i = 0; i< input.length; i++){
    str+= input[i];
  }
  console.log(str);
  dict.find(str, function(error,data){
    if(error) return console.log(error); console.log(data);
})
}

heapsPermute(lettersSortSplit("ale"), print);
