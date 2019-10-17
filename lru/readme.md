- es5 (js的过去) 
  没有class关键字
  js中，函数是一等公民
  function LRUCache 
  类的构造函数
  定义了一个类
  new LRUCache 可以被实例化
  new过程发生了什么
  生成了一个对象{} Object
  内存中生成了一个空的对象{}
  其中加上属性 构造函数 this

  面向对象 类(class) 构造函数(constructor) 方法 属性
  在es5没有class 使用function A 函数本身  prototype  this.
  函数具有prototype属性
  火车头是构造函数 prototype对象
  基于原型的面向对象

  - 任何函数都有prototype属性 它的值是对象
    key=>function() {}
  - 任何对象都有__proto__属性 指向构造函数的prototype属性
  JS的面向对象 类和实例的关系 不是父子关系 没有血缘
  - new的过程 构造函数被执行 创造一个this指向对象
    加了属性 对象的__proto__属性 找到原型链上的方法
    cache instance LRUCache
    JS中没有类的概念 LRUCache 也是一个对象

- es6 7 8 9 

- 装 容量
- push 最后一个元素是最重要的
  下标为【0】的元素可以被删除
  get 放到最后面来 在原位置删除原来的元素 将此元素放到最后