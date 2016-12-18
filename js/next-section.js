window.onload = function () {
    jQuery.fn.extend({
        scrollTo: function (speed, easing) {
            return this.each(function () {
                var targetOffset = $(this).offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, speed, easing);
            });
        }
    });

    $('.next-section').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            $next = $this.closest('section').next();

        $next.scrollTo(1200, 'swing');
    });

    $('.prev-section').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            $prev = $this.closest('section').prev();

        $prev.scrollTo(1200, 'swing');
    });
}
