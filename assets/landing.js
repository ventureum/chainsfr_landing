document.addEventListener('DOMContentLoaded', function() {
  // var typed = new Typed('#typed', {
  //   stringsElement: '#typed-strings',
  //   typeSpeed: 20,
  //   backSpeed: 20,
  //   startDelay: 1000,
  //   loop: false,
  //   loopCount: Infinity,
  //   onBegin: function(self) {
  //     prettyLog('onBegin ' + self);
  //   },
  //   onComplete: function(self) {
  //     prettyLog('onComplete ' + self);
  //   },
  //   preStringTyped: function(pos, self) {
  //     prettyLog('preStringTyped ' + pos + ' ' + self);
  //   },
  //   onStringTyped: function(pos, self) {
  //     prettyLog('onStringTyped ' + pos + ' ' + self);
  //   },
  //   onLastStringBackspaced: function(self) {
  //     prettyLog('onLastStringBackspaced ' + self);
  //   },
  //   onTypingPaused: function(pos, self) {
  //     prettyLog('onTypingPaused ' + pos + ' ' + self);
  //   },
  //   onTypingResumed: function(pos, self) {
  //     prettyLog('onTypingResumed ' + pos + ' ' + self);
  //   },
  //   onReset: function(self) {
  //     prettyLog('onReset ' + self);
  //   },
  //   onStop: function(pos, self) {
  //     prettyLog('onStop ' + pos + ' ' + self);
  //   },
  //   onStart: function(pos, self) {
  //     prettyLog('onStart ' + pos + ' ' + self);
  //   },
  //   onDestroy: function(self) {
  //     prettyLog('onDestroy ' + self);
  //   }
  // });

  // var typed2 = new Typed('#typed2', {
  //   strings: [
  //     'Some <i>strings</i> with',
  //     'Some <strong>HTML</strong>',
  //     'Chars &times; &copy;'
  //   ],
  //   typeSpeed: 0,
  //   backSpeed: 0,
  //   fadeOut: true,
  //   loop: true
  // });

  new Typed('#typed3', {
    strings: [
      '✔️&nbsp;Send in seconds. Cancel if needed',
      '🤩&nbsp;Say goodbye to accidental mistakes',
      '✨&nbsp;No more nonsensical crypto address',
      '👌&nbsp;Easy deposit. No wallet required',
      '😊&nbsp;Take back control of your crypto experience'
    ],
    typeSpeed: 10,
    backSpeed: 0,
    // smartBackspace: true,
    // fadeOut: true,
    shuffle: true,
    startDelay: 500,
    backDelay: 5000,
    cursorChar: '_',
    loop: true
  });


  // new Typed('#typed5', {
  //   strings: [
  //     '1 Some <i>strings</i> with',
  //     '2 Some <strong>HTML</strong>',
  //     '3 Chars &times; &copy;'
  //   ],
  //   typeSpeed: 0,
  //   backSpeed: 0,
  //   shuffle: true,
  //   cursorChar: '_',
  //   smartBackspace: false,
  //   loop: true
  // });

});



