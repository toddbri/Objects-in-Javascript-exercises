function wordHistogram(sentence){
  var words = sentence.split(" ");
  var histogram = {};
  for (var i in words){
    word = words[i];
    if (histogram[word]===undefined){
      histogram[word]=1;
    }else {
      histogram[word]+=1;
    }
  }
  return histogram;
}


console.log(wordHistogram('to be or not to be'));
