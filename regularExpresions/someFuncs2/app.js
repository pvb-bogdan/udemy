let re;
// literal characters
re = /hello/;
re = /hello/i;

//Metacharacters Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with or a word that ends in d
re = /^hello$/i; // Must begin and end with - case - h /o
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 ore more times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i; // Escape character - back slash escape ? character


// Brackets [] - Character sets
re = /gr[ae]y/i; //must be an a or e
re = /[GF]ray/; //must be an G or F
re = /[^GF]ray/; //Matching anythig except a G or F -  not starts with -if that we must do ^[GF]
re = /[A-Z]ray/; //Matching any uppercase letter
re = /[a-z]ray/; //Matching any lowercase letter
re = /[a-zA-Z]ray/; //Matching any lowercase/uppercase letter
re = /[0-9]ray/; //Match any digit between range -  0-9 all numbers
re = /[0-9][0-9]ray/; //Match any digit between range -  0-9 all numbers


// Braces {} - Quantifiers

re = /Hel{2}o/i; // match the character before brackets - Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // match the character before brackets - Must occur between {m, n} amount of times
re = /Hel{2,}o/i; // match the character before brackets - Must occur at least {m,} amount of times


// Parentheses() - grouping
re = /^([0-9]x){3}$/; //expects 1x4x5x - at least three numbers followed by x or more numbers . if we want to stop after 3 number we can ad $ at the end of expresion and ^ at begining

// shorthand character classes
re = /\w/; // Word character - alphanumeric or underscore _
re = /\w+/; // + = one or more - alphanumeric or underscore _
re = /\W/; //Non-Word chara character - ?. % etc
re = /\d/; //match any digits
re = /\d+/; //match any digit 0 or more times
re = /\D/; //match any non-digits
re = /\s/; //match any white space
re = /\S/; //match non-white space
re= /Hell\b/i; // wrod boundery


// Assertions - like conditions
re = /x(?=y)/; // Match x only if it followed by y
re = /x(?!y)/; // Match x only if NOT followed by y


// const str = '10ray';
// const str = 'Hello';
const str = 'gfdgfdxfgdgfd';


// log results
const result = re.exec(str);
console.log(result);

// create a function to be easy to console log results
function reTest(re, str){
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT matches ${re.source}`);
  }
}

reTest(re, str);