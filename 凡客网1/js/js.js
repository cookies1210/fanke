/**
 * Created by Administrator on 2017/4/19 0019.
 */
$(function(){
    //顶部菜单效果
    $("#top_right li.has_hide").hover(function(){
        $(this).addClass("cur");
        $(this).find(".menu").addClass("cur");
        $(this).find(".hide_box").show();

    },function(){
        $(this).removeClass("cur");
        $(this).find(".menu").removeClass("cur");
        $(this).find(".hide_box").hide();
    })

    /*凡客和v+点击切换*/
    $("#head .sousuo1 ul li").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
    })

    /*购物车特效*/
    $("#head #cart").hover(function(){
        $(this).addClass("cur");
        $(this).find(".hide_box").show();
    },function(){
        $(this).removeClass("cur");
        $(this).find(".hide_box").hide();
    })
    /*定位图特效*/
    $("#head #tu .tu2 ").hover(function(){
        $(this).find(".tu21").addClass("cur");
        $(this).find(".hide_boxm").show();
    },function(){
        $(this).find(".tu21").removeClass("cur");
        $(this).find(".hide_boxm").hide();
    })
    /*红色导航条*/
    $("#nav ul li").hover(function(){
        $(this).addClass("cur");
    },function(){
        $(this).removeClass("cur");
    })
    /*灰色导航条*/
    $("#nav2 ul li.list ").hover(function(){
        $(this).find("a.a1").addClass("cur");
        $(this).find(".hide_boxm").show();
    },function(){
        $(this).find("a.a1").removeClass("cur");
        $(this).find(".hide_boxm").hide();
    })
    /*轮播图特效*/
    var count = 0;
    var dingshi = setInterval(auto,1000);
    function auto(){
        count++;
        if(count==7){
            count=0;
        }
        $("#banner2 .right .luntu li ").eq(count).fadeIn().siblings("li").hide();
        $("#banner2 .right .shuzi li").eq(count).addClass("cur").siblings("li").removeClass("cur");
    }
    $("#banner2 .right .shuzi li").mouseover(function(){
        clearInterval(dingshi);
        count = $(this).index();
        $("#banner2 .right .luntu li ").eq(count).fadeIn().siblings("li").hide();
        $("#banner2 .right .shuzi li").eq(count).addClass("cur").siblings("li").removeClass("cur");
    })
    $("#banner2 .right .shuzi li").mouseout(function(){
        dingshi = setInterval(auto,1000);
    })
    /*无缝滚动效果*/

    var ul_width = 0;
    $(".wufeng .wufeng_right ul.list1 li").each(function(){
        ul_width = ul_width + $(this).width();
    })
    $(".wufeng .wufeng_right ul").css("width",ul_width+"px");
    $(".wufeng .wufeng_right ul.list2").css("left",ul_width+"px");
    var change_left = 710-ul_width*2;
    function wufeng(obj){
        setInterval(function(){

            var old_left = obj.position().left;
            var new_left = old_left-1;
            if(new_left<change_left){
                new_left = 710;
            }
           /* obj.position().left = new_left;*/
            obj.css("left",new_left+"px");
        },20)

    }
    wufeng($('.wufeng .wufeng_right ul.list1'))
    wufeng($('.wufeng .wufeng_right ul.list2'))
    /*商品列表*/
    $("#shopping .left .box").hover(function(){
        $(this).addClass("cur");
    },function(){
        $(this).removeClass("cur");
    })
    /*tab切换页效果*/
    $("#shopping .right .tab  ul li.biao").mouseover(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var count=$(this).index();
        /*$('#main #fenlei_box .news_tab .con').eq(cur).show().siblings('.con').hide();*/
        $("#shopping .right .tab .box ").eq(count).show().siblings(".box").hide();
    })
})