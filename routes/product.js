const express=require('express');

const pool=require('../pool.js');


var router=express.Router();

router.get('/detail',(req,res)=>{
    var $lid=req.query.lid;
    if(!$lid){
        res.send("查询失败");
        return;
    }
    var sql="select * from ring_product where pid=?"
    pool.query(sql,[$lid],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.length>0){
            res.send(result);
        }else{
            res.send("-1");
            return;
        }
    });
});

//获取首页商品推荐
router.get('/indexRecommend',(req,res)=>{
	//查询数据库
	var sql="select * from index_recommend";
	pool.query(sql,[req.query],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:1,data:result});
			// console.log(result);
		}else{
			res.send({code:-1});
		}
	});
});
//商品列表页
router.get('/productList',(req,res)=>{
	//查询数据库
	var pno=req.query.pno;
	var pageSize=req.query.pageSize;
	if(!pno){pno=1};
	if(!pageSize){pageSize=16};
	var start=(pno-1)*pageSize;
    pageSize=parseInt(pageSize);
	var sql="select * from ring_product limit ?,?";
	pool.query(sql,[start,pageSize],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:1,data:result});
			// console.log(result);
		}else{
			res.send({code:-1});
		}
	});
});

//加入购物车
router.get("/addcart",(req,res)=>{
	if(!req.session.uid){
		res.send({code:0,msg:"请登录"});
		return;
	}
    var pid=req.query.pid;
    var pname=req.query.pname;
	var price=parseFloat(req.query.price);
	var img=req.query.img;
	var uid=req.session.uid;
    //创建sql语句查询当前用户是否添加过此商品
    var sql="select id from ring_cart where uid=? and pid=?"
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            var sql=`insert into ring_cart values(null,${uid},${pid},${price},'${pname}',1,'${img}')`;
        }else{
            var sql=`update ring_cart set count=count+1 where uid=${uid} and pid=${pid}`;
        }
        pool.query(sql,(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:1,msg:"添加成功"})
			}else{
				res.send({code:-1,msg:"添加失败"})
			}
            
        })
    })
   
})

//移除购物车
router.get("/removeCart",(req,res)=>{
	// var pid=req.query.pid;
	var pname=req.query.pname;
	var uid=req.session.uid;
	// console.log(pname);
	var sql="delete from ring_cart where pname=? and uid=?";
	pool.query(sql,[pname,uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:1,msg:"删除成功"});
		}else{
			res.send({code:-1,msg:"删除失败"});
		}
	})
})
//删除选中
router.get("/delCheck",(req,res)=>{
	// 1:参数
	var ids=req.query.ids;
	//2.sql
	var sql="delete from ring_cart where id in ("+ids+")";
	//3.json
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:1,msg:"删除成功"})
		}else{
			res.send({code:-1,msg:"删除失败"})
		}
	})
})
//购物车列表页
router.get("/shopCart",(req,res)=>{
	var uid=req.session.uid;
	var sql="select * from ring_cart where uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:1,data:result});
		}else{
			res.send({code:-1,msg:"空"});
		}
	})
})
//导出路由器
module.exports=router;