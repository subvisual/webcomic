$(function () {
  var $document = $(document);
  var $hero = $('#hero');
  var $bubble1 = $('#bubble-1');
  var $bubble2 = $('#bubble0');
  var controller = new ScrollMagic.Controller();

  var enterBubble1 = new TimelineMax();
  enterBubble1
    .to($bubble1, 0.5, { x: -$bubble1.width() * 1.2}, '0');

  // var enterBubble2 = new TimelineMax();
  // enterBubble2
  //   .to($bubble2, 0.5, { x: -$bubble1.width() * 1.2}, '0')
  //   .to($bubble2, 0.5, { y: $bubble1.height() + 100}, '0.5');

  var scene = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1",
    duration: $document.height() + $hero.height(),
    triggerHook: "onLeave",
  })
  .setPin("#pinned-element1")
  .addIndicators();

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1",
    duration: '80%',
    triggerHook: 0.4,
  })
  .setTween("#frame-1", {
    css: {
      scale: '1.5%',
      y: '150px',
    },
    ease: Linear.easeNone,
  })
  .addIndicators();

  var scene3 = new ScrollMagic.Scene({
    offset: 650,
    triggerElement: "#pinned-trigger1",
    duration: 100,
    triggerHook: 0.4,
  })
  .setTween(enterBubble1)
  .addIndicators();

  // var scene4 = new ScrollMagic.Scene({
  //   offset: 700,
  //   triggerElement: "#pinned-trigger1",
  //   duration: 100,
  //   triggerHook: 0.4,
  // })
  // .setTween(enterBubble2)
  // .addIndicators();

  controller.addScene([
    scene,
    scene2,
    scene3,
  ]);
});

function audio() {
  var audio = new Audio('audio/creaking-door-1.mp3');
  window.subvisualAudio = audio;

  function playAudio(event) {
    audio.play();
  }

  function stopAudio(event) {
    audio.pause();
  }

  // init controller
  var controller = new ScrollMagic.Controller();

  // create a scene
  new ScrollMagic.Scene({
    triggerElement: '#trigger',
    duration: 50,  // the scene should last for a scroll distance of 100px
    offset: -100      // start this scene after scrolling for 50px
  })
    .on("start", playAudio)
    .on("end", stopAudio)
    .addIndicators()
    .addTo(controller); // assign the scene to the controller
}
