$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/product/shopCart",
        type:"get",
        // data:{uid:1},
        dataType:"json",
        success:function(result){
            var html="";
            var prices=0;
            var ul=$("#shopCart");
            var nullCart=$(".null_cart");
            if(result.code==-1){
                nullCart.css({"display":"block"})
            }else{
                var result=result.data;
                var n=0
                for(var li of result){
                    html+=`<li>
                    <input type="checkbox" data-id="${li.id}"> 
                    <img src="${li.img}">
                    <p class="pname">${li.pname}</p>
                    <p class="pfamily">男戒</p>
                    <p class="price">￥${li.price}</p>
                    <button class="remove">移除</button>
                 </li>`;
                 var id=li.id;
                 prices+=li.price;
                 n+=1;
                }
                var num=$(".howM span")
                var total=$(".total span");
                total.html(`￥${prices}`)
                num.html(`${n}`)
            }
            ul.html(html);
            // console.log(456)
            //购物车全选不全选功能
//1.查找触发事件的元素
var chbAll=$("#selectAll");
//2.绑定事件处理函数
chbAll.click(function(){
    var chbAll=this;//获得当前单击的chbAll对象
    //3.查找要修改的元素
    var chbs=$("#shopCart").children("li").children(":first-child");
    //4.修改元素
    // 遍历chbs
    for(var chb of chbs){
        //修改当前chb的checked属性的值为chabAll的checked的属性值
        chb.checked=chbAll.checked;
    }
});


var checks=document.querySelectorAll("#shopCart>li>input");
// console.log(checks);
for(var chb of checks){
    chb.onclick=function(){
    var chb=this;
    var chbAll=document.getElementById("selectAll");
    if(chb.checked==false){
        chbAll.checked=false;
    }else{
        var unchecked=document.querySelector("#shopCart>li>input:not(:checked)");
        if(unchecked==null){
            chbAll.checked=true;
        }
        }
        }
       }

    //删除商品
    var btns=document.querySelectorAll("#shopCart>li>.remove")
    for(var btn of btns){
        btn.onclick=function(e){
            var btn=e.target;
            var pname=btn.parentNode.children[2].innerHTML;
            // console.log(pname);
            $.ajax({
                url:"http://127.0.0.1:3000/product/removeCart",
                type:"get",
                data:{pname:pname},
                dataType:"json",
                success:function(result){
                        alert(result.msg);
                }
                
            }) 
            // var xhr=new XMLHttpRequest();
			// xhr.onreadystatechange=function(){
			// 	if(xhr.readyState==4 && xhr.status==200){
            //         var result=xhr.responseText;
			// 			alert(result.msg);
			// 	}
            // }
            // var url="product/removeCart?pname="+pname
			// xhr.open("get",url,true);
            // xhr.send(null);
            
            
        }
    }
    //删除选中
    var ids="";
    var delCheck=$(".shopping_total").children("a")
    var checkeds=$("#shopCart").children("li").children("input");
    delCheck.click(function(){
        for(var che of checkeds){
            if(che.checked==true){
                ids+=che.dataset.id+","
            }
        }
        if(ids.length==0){
            alert("请您选择需要删除的商品");
            return;
        }
        ids=ids.slice(0,-1);
        $.ajax({
            url:"http://127.0.0.1:3000/product/delCheck",
                type:"get",
                data:{ids},
                dataType:"json",
                success:function(result){
                        alert(result.msg);
                        window.location.reload();
                }
        })
    })
      }
    })
})
