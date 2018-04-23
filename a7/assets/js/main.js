$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})

function change() // no ';' here
{
    var elem = document.getElementById("toggleFunc");
    if (elem.value=="see more +") elem.value = "see less -";
    else elem.value = "see more +";
}


$('.parallax-window').parallax({imageSrc: '/assets/images/project1.png'});