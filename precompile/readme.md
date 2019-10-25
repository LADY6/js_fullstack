# 预编译 四部曲 发生在函数执行之前
1. 创建一个AO对象
2. 找形参和变量声明，将变量声明作为AO属性名，值为undefined
3. 将实参值和形参值统一
4. 在函数体里找函数声明，将函数名作为AO对象的属性名，值赋予函数体

1. AO{

}
2. AO{
    a:undefined,
    b:unfedifined
}
3. AO {
    a:1,
    b:undefined
}
4. AO {
    a:function(){}
    b:undefined
    d:function(){}
}

AO {
  a: undefined, => a: 1, => a: function () {}, => a: 123
  b: undefined, => b: function () {}
  d: function () {}
}

# 预编译也发生在全局
1. 创建一个GO对象
2. 找形参和变量声明，将变量声明作为GO属性名，值为undefined
3. 在函数体里找函数声明，将函数名作为GO对象的属性名，值赋予函数体
