- new的过程
1.创建一个空对象{}
2.new FunctionA(){}
函数运行时，会产生几个必有的对象
this 和 arguments
this.name => {}
FunctionA 不是以new的方式来运行时，则FunctionA是一个普通函数
此时 this 指向 Window
启动严格模式-> 'use strict';
this-> undefined

woniu.__proto__== Person.prototype
结果为true


(1).this 当作为对象的方法被执行时 this 指向对象
woniu.sing();
(2).new Person -> this 指向实例 
(3).Person() 普通函数被运行时 this 指向undefied 或者 window

- 面向对象的做法有三种
  constructor + prototype 基于原型
  es6 使用 class 关键字
  Object.create(原型对象)
- 手写代码是js考试的方式
  Object.create()
  function create(obj){
    function F() {}//空函数
    F.prototype = obj
    return new F{};
  }
