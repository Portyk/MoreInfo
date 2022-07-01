jQuery('document').ready(function() {

    jQuery('.menu__nav').click(function() {
        jQuery(this).toggleClass('is-active');

        if(jQuery(this).hasClass('is-active')) {
            jQuery('.menu__text').slideDown(300);
        } else {
            jQuery('.menu__text').slideUp(300);
        }
    });
        
});
