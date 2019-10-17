//缓存算法
//函数 es5 首字母大写的函数就是一个函数
function LRUCache (title) {
  //构造函数
  //类的函数
  //this 是指针 只有指向要生成的对象
  console.log(this)
  this.title = title;
}

//加方法
LRUCache.prototype.sayHello = function() {
  console.log(`你好,${this.title}`);
}
//静态方法
LRUCache.buyCar = function(){
  console.log('买车')
}
//对象(实例)
let cache = new LRUCache('井柏然')//实例化 将chche转换成一个对象
console.log(cache.title)
console.log(cache.sayHello())
LRUCache.buyCar()
console.log(cache.__proto__ == LRUCache.prototypes)
console.log(cache instanceof LRUCache)