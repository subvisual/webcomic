$(function () {
  var $document = $(document);
  var $hero = $('#hero');
  var $bubble1 = $('#bubble-1');
  var $bubble2 = $('#bubble-2');
  var $scene2Duration = $hero.height()*2;

  var bubblesDuration = 600;

  var enterBubble1 = new TimelineMax();
  enterBubble1
    .to($bubble1, 0.5, { x: -$bubble1.width() * 1.2 });

  var enterBubble2 = new TimelineMax();
  enterBubble2
    .to($bubble2, 0.5, { x: -$bubble1.width() * 1.2 })
    .to($bubble2, 0.5, { y: $bubble1.height() }, '0.5' );

  var scene = new ScrollMagic.Scene({
    triggerElement: "#main-act",
    duration: $document.height() + $hero.height(),
    triggerHook: "onLeave",
  })
  .setPin("#frame-1-wrapper")
  .addIndicators();

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#main-act",
    duration: $scene2Duration,
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
    triggerElement: "#main-act",
    offset: $scene2Duration,
    duration: bubblesDuration,
    triggerHook: 0.4,
  })
  .setTween(enterBubble1)
  .addIndicators();

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#main-act",
    offset: $scene2Duration,
    duration: bubblesDuration * 2,
    triggerHook: 0.4,
  })
  .setTween(enterBubble2)
  .addIndicators();

  new ScrollMagic.Controller().addScene([
    scene,
    scene2,
    scene3,
    scene4,
  ]);
});
