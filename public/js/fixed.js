
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
