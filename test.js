var shuffle = require('./')
var tape     = require('tape')

function getBigDeck(){
  var arr = []
  var counter = 0
  while(counter<1000){
    arr.push({
      num:counter
    })
    counter++
  }
  return arr
}

function getPercentageBetweenNumbers(x,y){
  var large = x > y ? x : y
  var small = x > y ? y : x
  var gap = large - small
  if(small===0) return 1
  return gap / small
}


tape('distribute fairly with even weighting', function(t){
  
  var hands = shuffle(getBigDeck(), {
    valueField:'num',
    players:[1,1]
  })

  t.equal(hands[0].length, 500, 'there are 500 cards in hand 1')
  t.equal(hands[1].length, 500, 'there are 500 cards in hand 2')

  var totals = [0,0]

  hands[0].forEach(function(o){
    totals[0] += o.num
  })

  hands[1].forEach(function(o){
    totals[1] += o.num
  })

  /*
  
    this is a way of telling the 'weight' between 2 numbers

    it will be useful when doctoring the weight : )
    
  */
  var weighting = getPercentageBetweenNumbers(totals[0], totals[1])


  // on fair distribution the weight needs to be no more than .2
  // (i.e. .2 is reasonable pure luck)

  t.ok(weighting <= .2, 'fair weighting is less than .2')

  t.end()

})


tape('be a randomn shuffle', function(t){
  
  var hands = shuffle(getBigDeck(), {
    valueField:'num',
    players:[1]
  })

  t.equal(hands[0].length, 1000, 'there are 1000 cards in hand 1')
  
  t.ok(hands[0][0].num!==0, 'the first card is not 0')
  t.ok(hands[0][50].num!==50, 'the 50th card is not 50')
  t.ok(hands[0][230].num!==230, 'the 230th card is not 230')
  t.end()

})


tape('throw an error with no valueField or players options', function(t){

  t.throws(function(){
    var hands = shuffle(getBigDeck(), {
      players:[1,1]
    })
  }, new Error('valueField option required'), 'throws an error with no valueField option')

  t.throws(function(){
    var hands = shuffle(getBigDeck(), {
      valueField:'num'
    })
  }, new Error('players option required'), 'throws an error with no valueField option')

  t.end()

})