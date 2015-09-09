var chai = require("chai");
var expect = chai.expect;

var Game = require( "../game.js").game;

describe('Game', function() {

  beforeEach(Game.reset);

	it('should exist', function() {
		expect(Game).to.be.an.object;
	});

  it('should be able to score normal points', function() {
    Game.bowl(2);
    expect(Game.getScore()).to.equal(2);
    Game.bowl(6);
    expect(Game.getScore()).to.equal(8);
  });

  it('should be able to score strikes', function() {
    Game.bowl(10);
    Game.bowl(6);
    Game.bowl(2);
    expect(Game.getScore()).to.equal(26);
  });

	it('should be able to score spares', function() {
    Game.bowl(5);
    Game.bowl(5);
    Game.bowl(2);
		expect(Game.getScore()).to.equal(14);
	});

  it('should be able to score 2 strikes in a row', function() {
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(2);
    expect(Game.getScore()).to.equal(36);
  });

  it('should be able to score a strike and a spare in a row', function() {
    Game.bowl(10);
    Game.bowl(5);
    Game.bowl(5);
    Game.bowl(5);
    expect(Game.getScore()).to.equal(40);
  });

  it('should be able to score 3 strikes in a row', function() {
    Game.bowl(10); //30
    Game.bowl(10); //25
    Game.bowl(10); //19
    Game.bowl(5);
    Game.bowl(4);
    expect(Game.getScore()).to.equal(83);
  });

  it('should be able to score a perfect game', function() {
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    Game.bowl(10);
    expect(Game.getScore()).to.equal(300);
  });

  it('should be able to score a Dutch 200', function() {
    Game.bowl(10);
    Game.bowl(9);
    Game.bowl(1);
    Game.bowl(10);
    Game.bowl(9);
    Game.bowl(1);
    Game.bowl(10);
    Game.bowl(9);
    Game.bowl(1);
    Game.bowl(10);
    Game.bowl(9);
    Game.bowl(1);
    Game.bowl(10);
    Game.bowl(9);
    Game.bowl(1);
    Game.bowl(10);
    expect(Game.getScore()).to.equal(200);
  });

});
