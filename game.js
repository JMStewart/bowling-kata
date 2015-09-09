var game = (function() {

  const maxPins = 10;
  const maxFrames = 10;

  var currentFrame;
  var currentBall;
  var currentPins;
  var ballsToAdd;
  var frames;
  var strikes;
  var spares;
  var ended;

  init();

  function init() {
    currentFrame = 0;
    currentBall = 0;
    currentPins = maxPins;
    ballsToAdd = 0;
    frames = [[]];
    strikes = [];
    spare = false;
    ended = false;
  }

  function bowl(pins) {
    strikes = strikes.filter(strike => {
      frames[strike.frame][0] += pins;
      return strike.balls--;
    });
    if (spare) {
      spare = false;
      frames[currentFrame-1][1] += pins;
    }
    if (!ended){
      currentPins -= pins;
      frames[currentFrame][currentBall] = pins;
      if(!currentPins) {
        if (currentBall){
          spare = true;
        } else {
          strikes.push({frame: currentFrame, balls:1});
        }
        currentBall = 1;
      }
      if(currentBall){
        currentBall = 0;
        currentPins = maxPins;
        currentFrame++;
        if (currentFrame >= maxFrames) {
          ended = true;
        } else {
          frames.push([]);
        }
      } else {
        currentBall++;
      }
    }
  }

	function getScore() {
    return frames.reduce((score, frame) => frame.reduce((frameScore, ball) => frameScore + ball, 0) + score, 0);
	}

  function reset() {
    init();
  }

	return {
		bowl: bowl,
		getScore: getScore,
    reset: reset
	};
})();

module.exports.game = game;
