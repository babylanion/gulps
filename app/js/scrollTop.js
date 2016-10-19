
var cur_scrollTop;
var timer=null;
$(window).bind('scroll', function () {
    var oRTT=$('#rtt');
    var pH=document.documentElement.clientHeight;
    cur_scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(cur_scrollTop>=pH){
        oRTT.show();
    }else{
        oRTT.hide();
    }
});
$(function (){
    $("#rtt").bind("click",function (){

        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;

        /*缓冲效果*/
        //cur_scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        //clearInterval(timer);
        //timer = setInterval(function(){
        //    var now = cur_scrollTop;
        //    var speed = (0 - now)/10;
        //    speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //    if(speed==0){
        //        clearInterval(timer);
        //        return false;
        //    }
        //    document.documentElement.scrollTop=cur_scrollTop + speed;
        //    document.body.scrollTop=cur_scrollTop + speed;
        //},30);

    })
});

