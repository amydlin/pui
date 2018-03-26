//parses wishlist or initializes if doesn't yet exist
var wishlist = JSON.parse(localStorage.wishlist) || [];

//gets wishlist from localStorage
function getWishlist() {
    $(function() {
        if (localStorage.wishlist != null)
            {
                wishlist = JSON.parse(localStorage.wishlist);
            }
    })
}

//adds new item to local wishlist 
function addToWishlist(roll, glaze, count, price) {
    getWishlist();
    if (glaze == "no-glaze") {
        rollGlaze = "No Glaze";
        rollImage = "<img class='resize' src='images/cin1.png'>";
    }
    else if (glaze == "vanilla-milk") {
        rollGlaze = "Vanilla Milk";
        rollImage = "<img class='resize' src='images/vanilla.jpg'>";
    }
    
    else if (glaze == "sugar-milk") {
        rollGlaze = "Sugar Milk";
        rollImage = "<img class='resize' src='images/sugar.jpg'>";
    }
    
    else {
        rollGlaze = "Double Chocolate";
        rollImage = "<img class='resize' src='images/chocolate.jpeg'>";
    }
    var item = {
        Image: rollImage,
        Roll: roll,
        Glaze: rollGlaze,
        Count: count,
        Price: price
    };
    wishlist.push(item);
    saveWishlist();
    showWishlist();
}
    
//saves local wishlist to localStorage
function saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
    
//creates the html for the table of items in wishlist
function createHTML() {
    wishlist = JSON.parse(localStorage.wishlist);
    var current = "<h2>" + wishlist.length + " products in your wishlist </h2>";
    var elem = document.getElementById("numWishlist");
    if(typeof elem !== 'undefined' && elem !== null) {
        document.getElementById("numWishlist").innerHTML = current;
  }
    for (var i in wishlist) {
        var item = wishlist[i];
        var row = "<tr><td>" + item.Roll + "</br>" +  
                             item.Image + "</td><td>" + 
                             item.Glaze + "</td><td>" + 
                             item.Count + "</td><td>" +
                             item.Price + "</td><td>"
                             + "<button onclick='deleteItemFromWishlist(" + i + ")'>x</button></td></tr>";
        $("#wishlistBody").append(row);
    }
}
    
//calls on createHTML and can be added to to add elements for wishlist
function showWishlist() {
    createHTML();
}
  
    
//deletes item from wishlist and resaves to localStorage to reflect changes
function deleteItemFromWishlist(index){
    wishlist.splice(index,1);
    $("#wishlistBody").empty();
    saveWishlist();
    showWishlist();
}
    
$(document).ready(function() {
    showWishlist();

    var temp = null;
    temp = document.getElementById("button-image");
    if (temp != null) {
        document.getElementById("button-image").innerHTML = "<img src='images/cin1.png'>";
    }
    
    var temp2 = null;
    temp2 = document.getElementById("cart");
    if (temp2 != null) {
        showCart();
    }
    
    var temp3 = null;
    temp3 = document.getElementById("wishlist");
    if (temp2 != null) {
        showWishlist();
    }
    
    $("#add-to-cart").click(function() {
//        pulls information for each item
        var glazes = document.getElementsByName("glaze");
        var counts = document.getElementsByName("count");
        var glaze = "";
        var count = -1;
        var price =  document.getElementById("price").innerHTML;
        var roll = "Original";
    
        for (var i = 0; i < glazes.length; i++) {
            if (glazes[i].checked) {
                glaze = glazes[i].value;
                break;
            }
        }
        
        for (var i = 0; i < counts.length; i++) {
            if (counts[i].checked) {
                count = counts[i].value;
                break;
            }
        }
        
//        adds to item to cart with grabbed information
        getCart();
        addToCart(roll, glaze, count, price);
    });
    
    $("#add-to-wishlist").click(function() {
        location.href="wishlist.html";
//        pulls information for each item
        var glazes = document.getElementsByName("glaze");
        var counts = document.getElementsByName("count");
        var glaze = "";
        var count = -1;
        var price =  document.getElementById("price").innerHTML;
        var roll = "Original";
    
        for (var i = 0; i < glazes.length; i++) {
            if (glazes[i].checked) {
                glaze = glazes[i].value;
                break;
            }
        }
        
        for (var i = 0; i < counts.length; i++) {
            if (counts[i].checked) {
                count = counts[i].value;
                break;
            }
        }
        
//        adds to item to cart with grabbed information
        getWishlist();
        addToWishlist(roll, glaze, count, price);
    });
    
    
});