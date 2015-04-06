function checkVowel(input) {
  var vowels = ["a", "e", "i", "o", "u"];


  for(var i = 0; i < vowels.length; i++){
    if(input[0] === vowels[i]){
      //return true;
      return input + "ay";
    }
  }
  return false;
}
