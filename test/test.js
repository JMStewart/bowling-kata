var chai = require("chai");
var expect = chai.expect;

var Game = require( "../game.js").game;

describe('Game', function() {
	it('should exist', function() {
		expect(Game).to.be.an.object;
	});
});
