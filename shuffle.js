module.exports = function(xs){
	var res = xs.slice()
  for (var i = res.length - 1; i >= 0; i--) {
    var n = Math.floor(Math.random() * i)
    var t = res[i]
    res[i] = res[n]
    res[n] = t
  }
  return res
}