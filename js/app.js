function animateLogo() {
	TweenMax.fromTo("#react-logo", 1.5, {
		css: {
			y: "-5px",
		}
	}, {
		css: {
			y: "5px",
		},
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
	});
}

function animateRobot() {
  var t = new TimelineMax({yoyo: true, repeat: -1,ease: Power2.easeInOut,});
  t.to("#android-robot",0.01,{rotation:"-=10deg"});
}

function updateSliderControl(){
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0;i < links.length;i++){
    var link = links[i];

    var section = document.querySelectorAll(link.getAttribute("href"));
    var sectionTop = section.offsetTop;
    var sectionBottom = sectionTop + section.offsetHeight;

    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom){
      link.className = "active";
    }else {
      link.className = "";
    }
  }
}

function ScrollToElement(element){
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo:{
      y:topOfElement,
    },
    ease:Power2.easeInOut,
  });
}

function addSmoothScrolling(){
  var links = document.querySelectorAll("#slider-control a");

  for(var i=0;i<links.length;i++){
    var link = links[i];

    link.addEventListener("click",function(event){
      event.preventDefault();
      var href = this.getAttribute("href");
      ScrollToElement(document.querySelector(href));
    });
  }
}

//Start animating when the page is ready
window.onload = function() {
	animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
};

window.onscroll = function() {
  updateSliderControl();
}
