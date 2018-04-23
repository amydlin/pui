$("#toggleFunc").on("click", function() {
	$(".outer").toggle();
});

$("[parallax]").each(function() {
  var $this = $(this), tl = anime.timeline({autoplay: false});

  $.each($this.attr("parallax").split(/[,\s]+(?={)/), function(i, v) {
    var v = eval("(" + v + ")");
    v.targets = $this[0];
    v.easing = "linear";
    tl.add(v);
  });

	$this = $this.is("[parallax-target]") ? $this.closest($this.attr("parallax-target")) : $this;

  var setup = function() {
		var bound = $this[0].getBoundingClientRect();
		var wHeight = $window.height();
    if (bound.top < wHeight && bound.bottom > 0) tl.seek( tl.duration * ( (wHeight - bound.top) / (wHeight + bound.height) ).toFixed(3) );
		else if (bound.top >= wHeight) tl.seek(0)
    else if (bound.bottom <= 0) tl.seek(tl.duration);
  }

  $($this.attr("parallax-scroll") || window).on("resize scroll", setup);
  setTimeout(setup, 50);
});