//  different comparisons 
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2!=1);
console.log(2==1);

// comparison on different datatypes
console.log("2" > 1);  // true 
console.log("02" > 1);  //true
// this both will pass true as js converts first string into number automaticallly

// for different comparison 
console.log(null>0 );  // false
console.log(null==0 );  // false
console.log(null>=0 );  // TRUE
 
console.log(undefined == 0 );  // false
console.log(undefined > 0 );  // false
console.log(undefined < 0 ); // false 

// strict check ===

console.log( "2" == 2 ); // this check value so passes true 
console.log( "2" === 2 ); // this check value and type so passes false