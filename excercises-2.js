// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
console.log('Hi, from excercises-2!');
function max(x, y){
    if(x >= y) {
      return x;
    } else {
      return y;
    }
}
console.assert(max(4,5)===5,'error2-1');
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if(x >= y && x >= z) {
      return x;
    } else if(y >= z) {
      return y;
    } else {
      return z;
    }
}
console.assert(maxOfThree(3, 4, 5)===5, 'error2-2');

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(x){
    var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    if(vowel.indexOf(x) === -1) {
      return false;
    } else {
      return true;
    }
}
console.assert(isVowel('y'), 'error2-3');

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var letters = phrase.split('');
    return letters.reduce(function(word, letter, i) {
      if (!isVowel(letter)) {
        word[i] = letter + 'o' + letter;
      } else {
        word[i] = letter;
      }
      return word;
    },[]).join('');
}
console.assert(rovarspraket('hello')==='hohelollolo', 'error 2-4');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    return string.split('').reverse().join('');
}
console.assert(reverse('racecar')==='racecar', 'error 2-5');
