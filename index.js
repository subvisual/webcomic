function init() {
  // init controller
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerElement: ".Section--one",
      duration: "100%"
    }
  });

  // create a scene
  new ScrollMagic.Scene({triggerElement: ".Section--two"})
    .setTween(".Section--one > div", {y: "0", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);
}

window.onload = init;
