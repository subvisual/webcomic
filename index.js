$(function () { // wait for document ready
  var controller = new ScrollMagic.Controller();

  // var scene = new ScrollMagic.Scene({
  //   offset: 100, // start scene after scrolling for 100px
  //   duration: 400 // pin the element for 400px of scrolling
  // })

  var scene = new ScrollMagic.Scene({
    triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
    duration: 200 // pin the element for a total of 400px
  })
  .setPin('#pinned-element1') // the element we want to pin
  .addIndicators(); // add indicators (requires plugin)

  // Add Scene to ScrollMagic Controller
  controller
    .addScene(scene);
});
