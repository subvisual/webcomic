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
