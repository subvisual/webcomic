$(function() { // wait for document ready
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
});
