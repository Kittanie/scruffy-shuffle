var shuffle = require('./')
var tape     = require('tape')

tape('distribute fairly with even weighting', function(t){
  var counter = 0
  var arr = []
  while(counter<1000){
    arr.push({
      num:counter
    })
    counter++
  }

  var hands = shuffle(arr, {
    value:'num',
    hands:[1,1],
    swap:20
  })
    

  var totals = []

  hands[0].forEach(function(o){
    totals[0] += o.num
  })

  hands[1].forEach(function(o){
    totals[1] += o.num
  })

  console.log('-------------------------------------------');
  console.dir(totals)


})
