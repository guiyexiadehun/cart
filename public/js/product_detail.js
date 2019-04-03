

   //����ҳչʾͼЧ��
var imgs=document.querySelectorAll("ul.img_sm>li>img");
for(var img_sm of imgs){
    img_sm.onmouseover=function(){
        var img_sm=this;
        var pic=document.querySelector("ul.img_lg>li>img");
        pic.src=img_sm.src;
        var biggest=document.getElementById("img_biggest");
        biggest.style.background=`url(${img_sm.src})`;
    }
}
//�����Ƽ�������ƶ�Ч��
var ul=document.getElementById("recommend");
var next=ul.parentNode.previousElementSibling;
var pre=next.previousElementSibling;
var moved=0;
next.onclick=function(){
    moved++;
    if(moved<=3){
        ul.style.marginLeft=-180*moved+"px";
    }else{
        next.disabled=true;
    }

}
pre.onclick=function(){
    moved--;
    if(moved<0){
        pre.disabled=true;
    }else{
        ul.style.marginLeft=-180*moved+"px";
        ul.style.paddingRight=50+"px";
    }
}

// 放大镜效果
            var $mask=$("#mask");
            var max=230;
            var $divLg=$(".biggest");
            var $sMask=$("#super-mask")
            // $sMask.mouseenter(function(){
            //     $mask.removeClass("d-none")
            //     $divLg.removeClass("d-none")
            // }).mouseleave(function(){
            //     $mask.addClass("d-none")
            //     $divLg.addClass("d-none")
            // })
            // .hover(function(){
            //     $mask.removeClass("d-none")
            //     $divLg.removeClass("d-none")
            // },
            // function(){
            //     $mask.addClass("d-none")
            //     $divLg.addClass("d-none")
            // })
            .hover(function(){
                $mask.toggleClass("d-none")
                $divLg.toggleClass("d-none")
            })
            //5.mask跟随鼠标移动，并同步移动大div的背景图片位置
            .mousemove(function(e){
                var left=e.offsetX-115;
                var top=e.offsetY-115;
                if(left<0){
                    left=0;
                }else if(left>max){
                    left=max;
                }
                if(top<0) top=0;
                else if(top>max) top=max;
                $mask.css({left,top});
                var backgroundPosition=
                `${-2*left}px ${-2*top}px`;
              $divLg.css({backgroundPosition});
            })
