// const keyword is used for  the constant value that is to be sured that its value will not change as it is immutable.
const accountId=12342
// accountId = 3422 this is not possible as it can not be changed .
console.log(accountId);


// let keyword is used for the variable that means to be in scope as they cannot be accsessd outside the scope.(AS LOCAL SCOPE).

    let accountName="Rahul"
    console.log(accountName);

    // accountName="sagar" this is not possible as it can not be changed .
{
    let accountName="Rahul"
    console.log(accountName);}

// console.log(accountName); as this is outside the scope and variable is declared inside so this shows error as its is undefined var .


// var keyword is used for the variable that means to be in global scope as it can be accsessed with in scope as wel as outside the scope.
{

var accountPassword="hello"
console.log(accountPassword);
}
console.log(accountPassword);

// now sometimes it accsess the value when not any one of the let or var is written \
// prefer not to use var as it changes the value of all var declared with same name 

city="rajpura"
console.log(city);

// some are undefined as no value is initalised to them 
let state
console.log(state);

// we can accsess all of the var with in table like
console.table([accountId,accountPassword,accountName,city,state])
