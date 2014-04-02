$(document).ready(function() {

//focus on add form
$('.add').focus();

//add item variable
$('#submit').click(function() {
    var current = $('#add').val();
    $("#items").append("<li class='new'>"+ current + "<button class='xButton'>X</button></li>");
});
//allows enter key to add items
    $("#add").keyup(function(event){
        if (event.which === 13) {
            $("#submit").trigger("click");
            $("#add").val("");
        }
    });
//show and hide x button
    $("#items").on("mouseenter", ".new", function() {
        $(this).find(".xButton").show();
    });

    $("#items").on("mouseleave", ".new", function() {
        $(this).find(".xButton").hide();
    });

//removes items from list
    $("#items").on("click", ".xButton", function() {
        $(this).closest("li").remove();
    });
//fades out clicked list item
    $("#items").on("click", ".new", function() {
        $(this).toggleClass("done");
    });
//Makes list items sortable
        $('ul').sortable();

//Clear All button clears all items
    function clearAll(){
        $('.new').remove()
    }
    $('#clear').on('click', clearAll);

//Clear Completed clears only checked
    function clearDone() {
        $('.done').remove()
    }
    $('#cleardone').on('click', clearDone);
});
