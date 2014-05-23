var shuffle = require('./shuffle')

module.exports = scruffyShuffle

function scruffyShuffle(pack, opts) {
	var opts = opts || {}
	var shuffled = shuffle(pack)
	var players = opts.players

	if(!players){
		throw new Error('players option required')
	}

	if(!opts.valueField){
		throw new Error('valueField option required')
	}

	if(!players.length) return shuffled

	var cardsPerHand = opts.size || Math.floor(shuffled.length / players.length)

	// deal the cards as a real dealer would
	var hands = []

	// loop X times over each player results in X cards per player
	for(var i=0; i<cardsPerHand; i++){

		// loop over each player for a single round
		for(var j=0; j<players.length; j++){

			// if the hand does not exist create it blank
			if(i==0){
				hands.push([])
			}

			// put the next card into this hand
			var hand = hands[j]
			hand.push(shuffled.pop())
		}
	}



	/*
	
		THIS IS WHERE THE SCRUFFY PART SHOULD GO

		(we read the weighting of each player and decide which cards to swap)

		hands is an array of player hands

		[
			// player 1 hand
			[
				{
					number:2,
					name:'2',
					suit:'diamond'
				},
				{
					number:11,
					name:'jack',
					suit:'diamond'
				}
			],

			// player 2 hand
			[
				{
					number:8,
					name:'8',
					suit:'diamond'
				},
				{
					number:5,
					name:'5',
					suit:'diamond'
				}
			]

		]



		the 'valueField' option can be used to extract the value of each card


		
	*/
	return hands
}