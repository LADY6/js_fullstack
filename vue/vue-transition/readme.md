# 容器居中

display: grid;
place-items: center;

- 父容器中
  position: relative;
- 子容器
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);

display: flex;
justify-items: center;
align-item: center
