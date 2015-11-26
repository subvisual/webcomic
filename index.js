$(function () {
  var $hero = $('#hero');
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1",
    duration: $(document).height() + $hero.height(),
    triggerHook: "onLeave",
  })
  .setPin("#pinned-element1")
  .addIndicators();

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1",
    duration: '200%',
    triggerHook: 0.4,
  })
  .setTween("#frame-1", {
    css: {
      scale: '3.5%',
      y: '150px',
    },
    ease: Linear.easeNone,
  })
  .addIndicators();

  controller.addScene([
    scene,
    scene2,
  ]);
});
