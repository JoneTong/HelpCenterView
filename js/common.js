/**
 * Created by 豆奶 on 2017/6/22.
 */
$(function(){

    //计算content的相对应高度开始
    var sh=$("body").height()-50;
    var sw=$("body").width();
    $(".content-height").css({height:sh+"px"});
    $(".content-min-height").css({minHeight:sh+"px"});
//计算content的相对应高度结束


//移动端点击导航左侧滑出菜单开始
    if(sw<768){
        var flag=true;
        $(".navbar-list").click(function(event){
            event.preventDefault();
            //console.log(1);
            if(flag){
                console.log(flag);
                $(".sliding-screen").animate({marginLeft:"80%"},500).css({position:"fixed",top:"50px"});
                $(".mask").animate({marginLeft:"80%"},500).css({display:"block",position:"fixed",top:"50px"});
                $(".menu-mobile").animate({left:"0"},500);
                //$(".slider").css({position:"static"});
                flag=false;
                console.log(flag)

            }else{
                $(".sliding-screen").animate({marginLeft:"0"},500).css({position:"static",top:"0",paddingTop:"40px"});
                $(".mask").animate({marginLeft:"0"},100).css({display:"none",position:"static",top:"0"});
                $(".menu-mobile").animate({left:"-80%"},500);
                flag=true;
            }
        });
        $(".menu > .nav > li > .nav > li > a").on("click",function(event){
            event.preventDefault();
            if(flag==false){
                console.log(flag);
                $(".sliding-screen").animate({marginLeft:"0"},500);
                $(".mask").animate({marginLeft:0},500).css({display:"none"});
                $(".menu-mobile").animate({left:"-80%"},500);
                window.location.href="AllList.html";
                flag=true;
            }
        });
        $(".go-back").on("click",function(){
            if(flag==false){

                $(".sliding-screen").animate({marginLeft:"0"},500).css({position:"static",top:"0",paddingTop:"40px"});
                $(".mask").animate({marginLeft:0},500).css({display:"none",position:"static",top:"0",paddingTop:"40px"});
                $(".menu-mobile").animate({left:"-80%"},500);
                flag=true;
            }
        });
        $(".mask").on("click",function(){
            if(flag==false){
                $(".sliding-screen").animate({marginLeft:"0"},500).css({position:"static",top:"0",paddingTop:"40px"});
                $(".mask").animate({marginLeft:0},500).css({display:"none",position:"static",top:"0",paddingTop:"40px"});
                $(".menu-mobile").animate({left:"-80%"},500);
                flag=true;
            }
        })
    }

//移动端点击导航左侧滑出菜单结束


    $(".btn-search").on("click",function(){
        console.log(1);
        window.location.href='SearchList.html';
    })

})
