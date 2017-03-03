function letterHistogram(word){
  var histogram = {};
  for (var i in word){
    letter = word[i];
    if (histogram[letter]===undefined){
      histogram[letter]=1;
    }else {
      histogram[letter]+=1;
    }
  }
  return histogram;
}


console.log(letterHistogram('bananas'));
