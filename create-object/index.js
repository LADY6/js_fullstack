// 'use strict';//启动严格模式
//     function Person(name,age){
//       console.log(this);
//       console.log(arguments);
//       this.name = name;
//     }
//     Person.prototype.sing = function() {
//       console.log('遥远的她,来自'+ this.name);
//     }
//     var woniu = new Person('蜗牛',18);
//     woniu.sing();

// 动物 -> 人类 -> 蜗牛
function Animal (planet) {
  this.planet = planet;
}
Animal.prototype.getPlanet = function () {
  return this.planet
}
function Person (name) {
  this.name = name;
  Person.prototype = new Animal('earth'); //原型链
  Person.prototype.getName = function(){
    console.log(this.name);
  }
  var woniu = new Person('蜗牛');
  woniu.getPlanet();//继承父类的方法
}