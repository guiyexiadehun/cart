const express=require('express');
//引入中间件body-parser
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
//引入商品路由器
const productRouter=require('./routes/product.js');
//创建web服务器

var server=express();
const session=require("express-session");
// 配置session
server.use(session({
    secret:"128位随机字符串",//安全字符串
    resave:false,  //每次请求更新session值 ，不更新
    saveUninitialized:true,//初始化保存数据
    cookie:{
        maxAge:1000*60*60 //辅助session工作
    }
}));
server.listen(3000);
// const cors=require("cors");
// server.use(cors({
//    origin:["http://127.0.0.1:3000","http://localhost:3000"],
//    credentials:true
// }));
//托管静态资源到public
server.use(express.static('./public'));
//配置中间件，配置完才能在路由中使用，应该放在路由前边
server.use(bodyParser.urlencoded({
  extended:false
}));

//使用路由器管理路由
//把用户路由器挂载到/user下，访问形式/user/
server.use('/user',userRouter);
//把商品路由器挂载到/product下，访问形式/product/
server.use('/product',productRouter);