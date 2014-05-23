scruffy-shuffle
===============

[![Travis](http://img.shields.io/travis/kitto1/scruffy-shuffle.svg?style=flat)](https://travis-ci.org/kitto1/scruffy-shuffle)

Lets you deal cards to players giving one an advantage. 

## installation

node:

```
$ npm install scruffy-shuffle
```

component:

```
$ component install kitto1/scruffy-shuffle
```

## usage

You pass an array of objects and scruffy shuffle will return multiple arrays - one for each player in a game.

Players can be 'weighted' meaning they are dealt higher value objects than other players.

The 'value' of an object can be derived from a property name or a map function.

```js
var shuffle = require('scruffy-shuffle')

// our source objects
var objects = [{
	name:'Apple',
	price:12
},{
	name:'Orange',
	price:11
},{
	name:'Pear',
	price:14
},{
	name:'Grape',
	price:9
},{
	name:'Fig',
	price:6
},{
	name:'Peach',
	price:8
}]

// the value of each object is its 'price' field
// we want 2 hands where the first hand is twice as good as the second
var hands = shuffle(objects, {
	valueField:'price',
	players:[2,1]
})

var betterList = hands[0]
var worseList = hands[1]
```

## api

### `var hands = shuffle(array, opts)`

Shuffle the array of objects into multiple arrays one for each player

The opts object has the following properties:

 * size - the number of cards in each players hand (optional)
 * valueField - which field of each object represents it value (can be map function)
 * players - an array of weightings for each player

The size (if given) is the number of cards for each hand

The valueField can be a string or a function and is used to determine the 'value' of each object

The list of players is a list of relative weighting towards each hand.

If you wanted player 2 to have a 30% better hand than player 1:

```js
[1,1.3]
```

If you wanted 5 players with an even split:

```js
[1,1,1,1,1]
```

## license

MIT