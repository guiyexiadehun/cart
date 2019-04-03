/**
 * Created by tarena on 2019/2/25.
 */

//请求获取数据
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/product/productList",
        type:"get",
        dataType:"json",
        success:function(result){
            // console.log(result.data);
            var results=result.data;
            var html="";
            for(var i=4;i<results.length;i++){
                var li=results[i];
                html+=`<li>
                <div><img src="${li.p_img}" alt=""/>
                </div>
                <div>
                    <h4>¥${li.price.toFixed(2)}</h4>
                    <p>${li.pname}</p>
                    <a href="product_detail.html?lid=${li.pid}"><span>查看详情</span></a>
                    <a href="">立即购买</a>
                </div>
            </li>`
            }
            var ul=$("#product_list");
            ul.html(html);
        }
    })
    var pno=1;
    var nextP=$(".pro_bottom").children(":last-child");
    nextP.click(function(){
        pno++;
        var nextP=$(this);
        nextP.prev().children("b").html(pno); 
        var url="http://127.0.0.1:3000/product/productList?";
        $.ajax({
            url:url,
            type:"get",
            data:{pno,pageSize:12},
            dataType:"json",
            success:function(result){
                // console.log(result.data);
                if(result.code==1){
                    var results=result.data;
                var html="";
                for(var li of results){
                    html+=`<li>
                    <div><img src="${li.p_img}" alt=""/>
                    </div>
                    <div>
                        <h4>¥${li.price.toFixed(2)}</h4>
                        <p>${li.pname}</p>
                        <a href="product_detail.html?lid=${li.pid}"><span>查看详情</span></a>
                        <a href="">立即购买</a>
                    </div>
                </li>`
                }
                var ul=$("#product_list");
                ul.html(html);
                }else{
                    alert("没有啦");
                }
                
            }
        })
    })
})