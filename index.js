var shuffle = require('./shuffle')

module.exports = scruffyShuffle

function scruffyShuffle(pack, opts) {
	var opts = opts || {}
	var shuffled = shuffle(pack)
	var hands = opts.hands || []

	if(!hands.length) return shuffled

	var cardsPerHand = Math.floor(shuffled.length / hands.length)

	return shuffled
}