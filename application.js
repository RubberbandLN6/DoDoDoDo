$(document).ready(function() {

    //focus on add form

    $('.add').focus();

    //add item variable

$('#submit').click(function() {
    var currentObject = $('#add').val();
    $("items").append("<li>"+ currentObject + "</li>");
});
});
