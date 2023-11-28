## 概述
一个基于monorepo框架的微前端系统，底层使用pnpm + wujie实现，用于收录前端应用实例。

## 启动
```bash
npm i pnpm -g
pnpm i
# 各应用会以.env文件中配置的端口名进行启动
# 在mac中该命令不可用，需分别启动主、子应用
pnpm -F * dev
```

## 应用
### react

#### react-01
列、行维度的合并，与动态删减

![image](https://cdn.nlark.com/yuque/0/2023/png/34903562/1700056531099-c6c031eb-9942-48f2-a606-a2fecce19bd6.png)

#### react-02
递归组件，默认递归三层

![image](https://cdn.nlark.com/yuque/0/2023/png/34903562/1700310469273-73bbb907-a0d0-46ed-8e78-e94050f496f0.png)

#### react-03
可拖拽表格

![image](https://cdn.nlark.com/yuque/0/2023/png/34903562/1701183232080-7c414660-fddb-4bc9-99fb-8c3590442c87.png)

#### vue-01
可配置化表格，按规范输入JSON格式数据，自动生成一个带输入框和按钮的表格

![image](https://cdn.nlark.com/yuque/0/2023/png/34903562/1700578393844-046ae294-c5db-4cff-8e68-437082217611.png)

## 相关link
### 项目背景
https://www.yuque.com/chanwj/vlkwxk/qvpv3kqws5hno3qt?singleDoc#
### 项目更新目录
https://www.yuque.com/chanwj/ixiw69/erc4umk558evkpi7?singleDoc#