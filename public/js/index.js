var zans=document.querySelectorAll("div.zan>span.fans_zan>i");
for(var fan of zans){
    fan.onclick=function(){
        var fan=this;
        var n=parseInt(fan.innerHTML.slice(1));
        n++;
        fan.innerHTML="赞"+n;
    }

}
//视频播放
var play=$(".img_play");
var media=$(".media");
var close=$(".close");
var p=document.getElementById("v3");
play.click(function(){
    
    p.play();
    media.css({"display":"block"});
    close.css({"display":"block"});
})
close.click(function(){
    p.pause();
    media.css({"display":"none"});
    close.css({"display":"none"});
})
//轮播图
window.onload=function(){
    autoMove('img','span');
}
//轮播图函数
function autoMove(tagImg,tagSpan){
    var imgs=document.querySelectorAll("#banner>.ido_banner>img");
    var spans=document.querySelectorAll("#banner>.item>span");
    //每次轮播后样式
    /*轮播到哪个位置，就对哪个位置的图片样式进行设置，首先让所有的图片样式opacity变为0，然后对移动到的位置的样式进行设置opacity为1*/
    function InitMove(index){
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.opacity='0';
            spans[i].style.background='#ccc';
        }
        imgs[index].style.opacity='1';
        spans[index].style.background='#9a826d';
    }
    //第一次初始化
    InitMove(0);
    //轮播过程的变换函数
    var count=1;
    function fMove(){
        if(count==imgs.length){
            count=0;
        }
        InitMove(count);
        count++;
    }
    //设置自动轮播定时器；
    var scollMove=setInterval(fMove,2500);
    //点击圆点，获取圆点对应图片
    var imgs=document.querySelectorAll("#banner>.ido_banner>img");
    var spans=document.querySelectorAll("#banner>.item>span");
    imgs[0].style.opacity="1";
    spans[0].style.background="#9a826d";
    for(var span of spans){
        span.onclick=function(){
            clearInterval(scollMove);
            for(var i=0;i<spans.length;i++){
                if(spans[i].style.background="#9a826d"){
                    spans[i].style.background="#ccc";
                    imgs[i].style.opacity="0";
                }
            }
            this.style.background="#9a826d";
            var id=this.getAttribute("data-target");
            var pic=document.getElementById(id);
            pic.style.opacity="1";
            scollMove=setInterval(fMove,2500);
        }
    }
}
//屏幕滚动一定位置导航栏固定
//取窗口滚动条高度
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
window.onscroll=function(){
    var menuFixed=document.getElementById("menu-fixed");
    var rightFixed=$(".right_fixed");
    //if(window.scrollY>185){
     if(getScrollTop()>185){
        menuFixed.style.display="block";
        rightFixed.css({"display":"block"});
   }else{
        menuFixed.style.display="none";
        rightFixed.css({"display":"none"});
    }
}
//获得用户名
// if(location.search!==""){
//     var uid=location.search.split("=")[1];
//     $.ajax({
//         url:"http://127.0.0.1:3000/user/index",
//         type:"get",
//         data:{uid:uid},
//         dataType:"json",
//         success:function(result){
//             // console.log(result);
//             var uname=result[0].uname;
//             $("#user").children().first().html(`${uname}`);
//         }
//     })
// }

// 首页商品推荐
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/product/indexRecommend",
        type:"get",
        dataType:"json",
        success:function(result){
            // console.log(result.data);
            var results=result.data;
            var html="";
            for(var result of results){
                html+=`<div class="rever">
                <div class="before">
                    <img src="${result.rming}"/>
                </div>
                <div class="after">
                    ${result.r_abstract}
                    <p><a href="product_detail.html?lid=${result.rid}">查看详情</a></p>
                </div>
            </div>`
            }
            var recommend=$(".new_pro").children().last();
            recommend.html(html);
        }
    })
})