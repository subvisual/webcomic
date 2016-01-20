$(function () {
  var $hero = $('#hero');
  var $bubble = $('#bubble1');
  var viewport = { width: $(document).width(), height: $(document).height()}

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1",
    duration: '100%',
    triggerHook: "onLeave",
  })
  .setPin("#pinned-element1")
  .addIndicators();

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1",
    duration: '100%',
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

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#frame-1",
    offset: 900,
    duration: '300px',
    triggerHook: 0.4,
  })
  .setTween('#bubble-1', {
    css: {
      left: '85%'
    },
    ease: Linear.easeNone,
  })
  .addIndicators();

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#frame-1",
    offset: 1300,
    duration: '200px',
    triggerHook: 0.4,
  })
  .setTween('#bubble-2', {
    css: {
      top: '38%',
      opacity: '1'
    },
    ease: Linear.easeNone,
  })
  .addIndicators();

  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#frame-1",
    offset: 1900,
    duration: '200px',
    triggerHook: 0.4,
  })
  .setTween('#bubble-2', {
    css: {
      top: '108%',
      opacity: '0'
    },
    ease: Linear.easeNone,
  })
  .addIndicators();

  controller.addScene([
    scene,
    scene2,
    scene3,
    scene4,
    scene5
  ]);

  // var div = $('div');
  // setInterval(function(){
  //   var pos = div.scrollTop();
  //   div.scrollTop(pos + 10);
  // }, 200)
});
