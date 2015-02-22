$(document).ready(function(){

    var img1=$("#img1");
    var img2=$("#img2");
    var img3=$("#img3");
    var img4=$("#img4");
    var img5=$("#img5");
    var img6=$("#img6");
    img2.hide();
    img3.hide();
    //$('#img1_1').hide();
    //$('#img2_1').hide();
    //$('#img3_1').hide();
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        $('body ul li').css("background-color", "yellow");

        if(top<=200){
            $('#li1').css("background-color", "orange");
        }else if(200<top&&top<=600){

            $('#li2').css("background-color", "orange");
        }else if(600<top&&top<=1200){
            $('#li3').css("background-color", "orange");
        }else if(1200<top&&top<=2100){
            $('#li4').css("background-color", "orange");
        }

    });

    $(window).scroll(function(){
    var top1 = $(window).scrollTop();
    if(top1>0) {
        $('body ul li').removeClass('page_at_top').addClass('page_not_at_top')
     }else{
        $('body ul li').removeClass('page_not_at_top').addClass('page_at_top')
    }
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 600);
        return false;
    });


    $("#right_a").click(function() {

        return img1.is(":visible") ? (img1.animate({
            height: "toggle"
        }, 350), void img2.animate({
            height: "toggle"
        }, 350)) : img2.is(":visible") ? (img2.animate({
            height: "toggle"
        }, 350), void img3.animate({
            height: "toggle"
        }, 350)) : img3.is(":visible") ? (img3.animate({
            height: "toggle"
        }, 350), void img1.animate({
            height: "toggle"
        }, 350)) : void 0
    }), $("#left_a").click(function() {
        return img1.is(":visible") ? (img1.animate({
            height: "toggle"
        }, 350), void img3.animate({
            height: "toggle"
        }, 350)) : img2.is(":visible") ? (img2.animate({
            height: "toggle"
        }, 350), void img1.animate({
            height: "toggle"
        }, 350)) : img3.is(":visible") ? (img3.animate({
            height: "toggle"
        }, 350), void img2.animate({
            height: "toggle"
        }, 350)) :  void 0
    });

    img1.click(function() {
        $('#img1_1').css('display', 'block')
    });
    img2.click(function() {
        $('#img2_1').css('display', 'block')
    });
    img3.click(function() {
        $('#img3_1').css('display', 'block')
    });

    $('#img1_1').click(function() {
        $('#img1_1').css('display', 'none')
    });
    $('#img2_1').click(function() {
        $('#img2_1').css('display', 'none')
    });
    $('#img3_1').click(function() {
        $('#img3_1').css('display', 'none')
    });
});