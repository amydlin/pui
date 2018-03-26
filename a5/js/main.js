//parses cart or initializes if doesn't yet exist'
var cart = JSON.parse(localStorage.cart) || [];

//gets cart from localStorage
function getCart() {
    $(function() {
        if (localStorage.cart != null)
            {
                cart = JSON.parse(localStorage.cart);
                console.log(cart);
            }
    })
}

//adds new item to local cart 
function addToCart(roll, glaze, count, price) {
    getCart();
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
    cart.push(item);
    console.log(cart);
    saveCart();
    showCart();
}

//saves local cart to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

//creates the html for the table of items in cart
function createHTML() {
    cart = JSON.parse(localStorage.cart);
    console.log(cart.length);
    numProducts = "<h2>" + cart.length + " products in your cart </h2>";
    document.getElementById("checkout").innerHTML = numProducts;
    for (var i in cart) {
        var item = cart[i];
        var row = "<tr><td>" + item.Roll + "</br>" +  
                             item.Image + "</td><td>" + 
                             item.Glaze + "</td><td>" + 
                             item.Count + "</td><td>" +
                             item.Price + "</td><td>"
                             + "<button onclick='deleteItem(" + i + ")'>x</button></td></tr>";
        $("#cartBody").append(row);
    }
}

//calls on createHTML and can be added to to add elements
function showCart() {
    createHTML();
}

//deletes item and resaves to localStorage to reflect changes
function deleteItem(index){
    cart.splice(index,1);
    $("#cartBody").empty();
    saveCart();
    showCart();
}

//changes the image of different glazes
function changeImage(value) {
     switch(value) {
         case "no":
             document.getElementById("button-image").innerHTML = "<img src='images/cin1.png'>";
             break;
         case "vanilla":
             document.getElementById("button-image").innerHTML = "<img src='images/vanilla.jpg'>";
             break;
         case "sugar":
             document.getElementById("button-image").innerHTML = "<img src='images/sugar.jpg'>";
             break;
         case "chocolate":
             document.getElementById("button-image").innerHTML = "<img src='images/chocolate.jpeg'>";
             break;
     }
}

//changes the price of different counts
function changePrice(value) {
     switch(value) {
         case "1":
             document.getElementById("price").innerHTML = "$4.00";
             break;
         case "3":
             document.getElementById("price").innerHTML = "$12.00";
             break;
         case "6":
             document.getElementById("price").innerHTML = "$24.00";
             break;
         case "12":
             document.getElementById("price").innerHTML = "$48.00";
             break;
     }
}


$(document).ready(function() {

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
        addToCart(roll, glaze, count, price);
    });
    
    
});