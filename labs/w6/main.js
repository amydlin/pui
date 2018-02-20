function addNewList() {
    var list = document.getElementById("grocery-list");
    var itemInput = document.getElementById("new-list-item");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

//$(document).ready(function(){
//    $("#add-item").click(function() { // bind handler for click event
//        var list = $("#grocery-list"); // get the ol list by id
//        var itemInput = $("#new-list-item"); // get the new item input
//	  // append the input value within an li element
//        list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>")
//    });
//    $(".delete-item").click(function() {
//    $(this).parent().remove();
//});
//});

$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});
//
//$(document).on("click", ".complete-item", function() {
//    $('input:checkbox').on('change', function () {
//        if (this).is(:checked) {
//            $(this).parent().css('textdecoration', 'line-through');
//        } else {
//            $(this).parent().css('textDecoration', 'none');
//        }
//    })
//});

$(document).on("click", ".complete-item", function() {

    if ($(this).is(':checked')) { // true if the input checkbox is checked
        // console.log("entered if");
        $(this).parent().css('text-decoration', 'line-through');
        // in css, this would be: "text-decoration: line-through"
    } else {
        // console.log("entered else");
        $(this).parent().css('text-decoration', 'none');
        // in css, this would be: "text-decoration: none"
    }
});
    
