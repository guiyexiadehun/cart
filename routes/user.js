const express=require('express');
//引入连接池模块 ../表示引入上一级目录
const pool=require('../pool.js'); 
//创建空的路由器对象
var router=express.Router();
//所有的接口
/**************1.登录接口******************/
router.post('/login',(req,res)=>{
	//获取参数
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	//查询数据库
	var sql="select * from ring_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			req.session.uid=result[0].uid;
			res.send(result);
		}else{
			res.send("0");
		}
	});
});

router.get('/index',(req,res)=>{
	//获取参数
	var $uid=req.session.uid;
	//查询数据库
	var sql="select * from ring_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
/****************2.检测用户名是否存在接口****************/
router.get('/queryUser',(req,res)=>{
	//获取用户名
	var $uname=req.query.uname;
	//查询数据库的操作
	var	sql="select * from ring_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if (err) throw err;
		if(result.length>0){
			res.send("1");
		}
	});
});
/****************3.注册接口****************/
router.post('/reg',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("用户名不能为空");
		return;
	}
	if(!$upwd){
		res.send("密码不能为空");
		return;
	}
	var sql="insert into ring_user set?";
	pool.query(sql,[req.body],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}
	});
});
/****************4.找回密码接口****************/
router.post('/query',(req,res)=>{
	var $uname=req.body.uname;
	var $phone=req.body.phone;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$phone){
		res.send("手机号不存在");
		return;
	}
	var sql="select * from ring_user where uname=? and phone=?";
	pool.query(sql,[$uname,$phone],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("1");
		}
	});
});

/****************5.更改信息接口****************/
router.post('/select',(req,res)=>{
	var $uname=req.body.uname;
	//console.log($uname);
	var sql="select * from ring_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});

router.post('/update',(req,res)=>{
	var $user_name=req.body.user_name,
		$uname=req.body.uname;
		$love=req.body.love,
		$hobby=req.body.hobby,
		$gender=req.body.sex;
		$emotion=req.body.emotion;
	var sql="update ring_user set user_name=?,love=?,hobby=?,sex=?,emotion=? where uname=?";
	pool.query(sql,[$user_name,$love,$hobby,$gender,$emotion,$uname],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}
	});
});
//导出路由器
module.exports=router;