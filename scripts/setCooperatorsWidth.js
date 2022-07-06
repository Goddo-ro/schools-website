$(document).ready(function() {
    $( window ).resize(function() {
        const container = $(".all-content-container");
        const width = container.width();
        const rightPos = width - container.offset().left;
        console.log( $( window ).width() - rightPos);

        const cooperators = $(".cooperators");
        cooperators.css({
            marginRight: $( window ).width() - rightPos,
        })
    });
});