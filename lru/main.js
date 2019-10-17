function LRUCache(capacity) {
  this.capacity=capacity;
  this.obj = {};
  //push splice pop unshift
  this.arr =[];//优先级
}
LRUCache.prototype.get =function(key){
  return this.obj[key];
  var val =this.obj[key];
  if(val){
    var index = this.arr.indexOf(key);
    this.arr.splice(key);
    return val;
  }else{
    return -1;
  }
}
LRUCache.prototype.put =function(key,value){
  if(this.obj[key]){//已存在
    this.obj[key] = value;//更新值
    //调整优先级 确定在哪个位置做了修改 先把原来的数删除 移到最前面
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);//在最前面添加元素
  }
  if (this.capacity === this.arr.length){//放满了
    var k = this.arr.pop();//删除最后一个元素
    this.obj[k] = undefined;
  }

  this.obj[key] = value;
  this.arr.unshift(key);//放到最前面 最前面是最优先

}
let cache = new LRUCache(2);
// console.log(cache.capacity);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(3,3);
console.log(cache.get(2));
cache.put(4,4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
console.log(cache.arr,cache.obj)
