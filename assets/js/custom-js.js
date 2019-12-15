$('.alert').alert();
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
    $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
    trigger: 'focus'
});
$(function(){
    $('.btn-toggle').click(function(){
        $('.sm-device-menu').toggleClass('test');
    })
})




