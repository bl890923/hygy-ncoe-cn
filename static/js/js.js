$(function()
{
    new WOW({ mobile: false }).init();
    $('.hform').find('form').submit(function()
    {
        var val = $(this).find('input').val();
        if (!val)
        {
            alert('请输入关键字');
            return false
        }
    });
    $('.menu-btn').on('click', function()
    {
        $('.header').find('.nav').toggle()
    });
    if ($(window).width() > 991)
    {
        $('.dropdown').hover(function()
        {
            $(this).addClass('open')
        }, function()
        {
            $(this).removeClass('open')
        })
    }
    else
    {
        $('.dropdown').find('.arr').on('click', function()
        {
            $(this).parent().toggleClass('open')
        })
    }
    $('.lanmu').find('.arr').on('click', function()
    {
        $(this).parent().toggleClass('open')
    });
    $('.kf .kf-side').click(function()
    {
        var rt = $('.kf').css("right");
        var num = parseInt(rt);
        if (num < 0)
        {
            $('.kf').animate({ right: '20px' }, "slow");
            $('.kf .kf-side span.arrow').addClass('on')
        }
        else
        {
            $('.kf').animate({ right: '-208px' }, "slow");
            $('.kf .kf-side span.arrow').removeClass('on')
        }
    });
    $('.kt-top span.close').click(function()
    {
        $('.kf').animate({ right: '-208px' }, "slow")
    });
    $('.kf .backTop').click(function()
    {
        $("html,body").stop().animate({ scrollTop: '0' }, 500)
    })
});
function tabsSwiper(menu, con, allowTouchMove)
{
    var swiper = new Swiper(con, {
            speed: 500,
            spaceBetween: 10,
            autoHeight: true,
            allowTouchMove: !allowTouchMove,
            on: { slideChangeTransitionStart: function()
                {
                    $(menu).find('li').eq(this.activeIndex).addClass('active').siblings().removeClass('active')
                } }
        });
    $(menu).on('click', 'li', function(e)
    {
        $(this).addClass('active').siblings().removeClass('active');
        swiper.slideTo($(this).index())
    })
}
$(function()
{
    var _wrap = $("#review");
    var _interval = 3000;
    var _moving;
    _wrap.hover(function()
    {
        clearInterval(_moving)
    }, function()
    {
        _moving = setInterval(function()
        {
            var _field = _wrap.find('li:first');
            var _h = _field.innerHeight();
            _field.animate({ marginTop: -_h + 'px' }, 800, function()
            {
                _field.css('marginTop', 0).appendTo(_wrap)
            })
        }, _interval)
    }).trigger('mouseleave')
});
