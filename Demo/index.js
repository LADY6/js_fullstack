var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
}
// var x = stooge;
stooge['middle-name'] = 'Lester';
stooge.profession = 'actor';
// stooge.nickname ='Curly';
// console.log(stooge["first-name"]);
// console.log(stooge["middle-name"]);
// console.log(x.nickname);

if (typeof Object.beget !== 'function'){
  Object.create = function (o){
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
var another_stooge = Object.create(stooge);
var name;
for (name in another_stooge) {
  if (typeof another_stooge[name] !== 'function'){
    //console.log(name + ':' +another_stooge[name]);
  }
}

var i;
var properties = ['first-name','middle-name','last-name','profession'];
for (i = 0; i < properties.length; i +=1){
  console.log(properties[i] + ':' + another_stooge[properties[i]]);
}