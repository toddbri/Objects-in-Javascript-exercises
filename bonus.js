function Histogram(sentence){
  var words = sentence.split(" ");
  for (var i in words){
    word = words[i];
    letterHistogram(word);
  }
  return histogram;
}

function letterHistogram(word){
  for (var i in word){
    letter = word[i];
    if (histogram[letter]===undefined){
      histogram[letter]=1;
    }else {
      histogram[letter]+=1;
    }
  }
}
var histogram ={};
console.log(Histogram('to be or not to be'));
histogram = {};
console.log(Histogram('bananas are a good'));
var top_two = {1:'',2:''};
for (var entry in histogram){
  if (top_two[1]===''){
    top_two[1]=entry;
  } else if (parseInt(histogram[entry])>parseInt(histogram[top_two[1]])){
      top_two[2]=top_two[1];
      top_two[1]=entry;
  } else {
    if (top_two[2]===''){
      top_two = entry;
    } else if (parseInt(histogram[entry])>parseInt(histogram[top_two[2]])){
      top_two[2]=entry;
    }

  }

}

console.log("top 2 letters are: " + top_two[1] + ": " + histogram[top_two[1]] + " and " + top_two[2] + ": " + histogram[top_two[2]] );
