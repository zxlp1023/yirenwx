$(function () {

    // 返回按钮
    $('.icon-back').click(function () {
        history.go(-1)
    })

    //消除苹果点击延时
    FastClick.attach(document.body)

    //首页搜索
    $(document).on("click touchstart", ".search-index", function (e) {
        $(".weui-search-bar").addClass("weui-search-bar_focusing").find('input').focus();
    })
        .on("click", ".weui-search-bar__cancel-btn", function (e) {
            $(".weui-search-bar").removeClass("weui-search-bar_focusing").find(".weui-search-bar__input").val("").blur();
            $.closePopup()
        })

    //删除历史纪录
/*     $('#dltSearch').click(function () {
        $(this).parent().siblings().remove();
    }) */

    //收获地址
    $('.addr-manage .default').click(function(){
        //设置默认地址
        $(this).find('.weui-icon-circle').addClass("weui-icon-success").parents('dl').siblings().find('.weui-icon-circle').removeClass('weui-icon-success');
    })

    //删除地址
    $('.addr-manage .delete').click(function () {
        $(this).parents('dt').parent().remove();
    })

    // 首页swiper
    $(".swiper-container").swiper({
        loop: true,
        autoplay: 3000
    })

    //加入购物车成功
    $(document).on("click", "#show-toast", function () {
        $.toast("成功加入购物车", function () {
            // console.log('已加入购物车')
        });
    })

    //购物车加减数量
    var MAX = 99,
        MIN = 1;
    $('.weui-count__decrease').click(function (e) {
        var $input = $(e.currentTarget).parent().find('.weui-count__number');
        var number = parseInt($input.val() || "0") - 1
        if (number < MIN) number = MIN;
        $input.val(number)
    })
    $('.weui-count__increase').click(function (e) {
        var $input = $(e.currentTarget).parent().find('.weui-count__number');
        var number = parseInt($input.val() || "0") + 1
        if (number > MAX) number = MAX;
        $input.val(number)
    })

    $('.delete-swipeout').click(function () {
        $(this).parents('.weui-cell').remove()
    })
    $('.close-swipeout').click(function () {
        $(this).parents('.weui-cell').swipeout('close')
    })


    // 领取红包
    function GetRTime() {
        var EndTime = new Date('2017/12/20 00:00:00');
        var NowTime = new Date();
        var t = EndTime.getTime() - NowTime.getTime();
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 60 / 60 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }


        // document.getElementById("t_d").innerHTML = d + " :";
        document.getElementById("t_h").innerHTML = h + " :";
        document.getElementById("t_m").innerHTML = m + " :";
        document.getElementById("t_s").innerHTML = s + "";
    }
    // setInterval(GetRTime, 0); 关闭倒计时

    // 红包
    $('.redPacket').click(function () {
        $('#dialog').fadeIn(300);
    })

    $('#a1').click(function () {
        $('.cnt').fadeOut(300);
        $('.getRedPacket').fadeIn(300);
    })
    $('.cls').click(function () {
        $(this).parents('#dialog').fadeOut(300);
    })

    // 充值
    $('.withdrawNumber input').focus();
    $('#allOut').click(function () {
        $('.withdrawNumber input').val($('#balance').html());

    })

    // 提现
    $('#withdraw').focus();
    $('#allOut').click(function () {
        $('#withdraw').val($('#balance').html());
    })

    //提现金额不能大于余额

    $('#withdraw').bind('input propertychange', function () {
        var inputBalance = parseInt($(this).val());
        var maxBalance = parseInt($('#balance').html());
        var remindP = $('#remind p.red');
        if (inputBalance > maxBalance) {
            remindP.show();
        } else {
            remindP.hide();
        }
    })

});
