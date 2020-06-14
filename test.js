//Array
//[1.1] Given an array of integers, find the largest product yielded from three of the integers
var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
const product=unsortedArray.sort((a,b)=>a-b)
console.log(product)
positiveProduct=product[product.length-1]*product[product.length-2]*product[product.length-3];
negativeProduct=product[0]*product[1]*product[product.length-1];
console.log(Math.max(positiveProduct,negativeProduct)); // 21000
//[1.2] Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), 
// find the missing number in `O(n)` time

var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

function missingNumber(arr){
    let n=arr.length+1;
    let expectedSum=n*(n+1)/2;
    let sum=arr.reduce((acc,e)=>acc+e,0);
    return expectedSum-sum;
}
console.log(missingNumber(arrayOfIntegers));

//[1.3] Removing duplicates of an array and returning an array of only unique elements

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
function uniquearray(array){
    let uniqueArray = [];
     
    array.forEach((i) => {
        let isunique = true;
        uniqueArray.forEach((j) =>{
            if(i==j) isunique = false;
        });
        if(isunique==true) uniqueArray.push(i);
    });
    return uniqueArray;
}
console.log(uniquearray(array));

// [1.4]Given an array of integers,find the largest difference between two elements such that the element 
// of lesser value must come before the greater element

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
function findLargestDifference(array){
    let sortedArray=array.sort();
    return sortedArray[sortedArray.length-1]-sortedArray[0];
}
console.log(findLargestDifference(array));

// [1.5] Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array 
// other than itself. (Solve this in O(n) without division)

// var firstArray = [2, 2, 4, 1];
// var secondArray = [0, 0, 0, 2];
// var thirdArray = [-2, -2, -3, 2];

function product(array){
var n=array.length;
var leftArr=[];
var RightArr=[];
var Product=[];
leftArr[0]=1;
RightArr[n-1]=1;
for(let i=1;i<n;i++)
    leftArr[i]=array[i-1]*leftArr[i-1];
for(let j=n-2;j>=0;j--)
    RightArr[j]=array[j+1]*RightArr[j+1];
for(let k=0;k<n;k++)
{
    Product[k]=leftArr[k]*RightArr[k];
}    
console.log(Product)
}
var array = [-2,-2,-3,2];
product(array);

//1.6 Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. 
// In this case, these elements should be unique!

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
//intersection
function intersection(farray,sarray){
    return farray.filter(value => sarray.includes(value))
}
console.log(intersection(firstArray,secondArray));
//Union
let n=[...firstArray,...secondArray];
console.log([...new Set(n)]);


//Strings

// 2.1 Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should be become
//  "emocleW ot siht tpircsavaJ !ediuG" 

 var string = "Welcome to this Javascript Guide!";

 function wordreverse(strings){
    return strings.split(' ').reverse().join(' ').split('').reverse().join('');
 }
 console.log(wordreverse(string));


//2.2 Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"

function anagramFunction(fWord,sWord){
     if(fWord.toLowerCase().split('').sort().join('')==sWord.toLowerCase().split('').sort().join(''))
        console.log("\""+fWord+"\""+" is an anagram of "+"\""+sWord+"\"");
     else
         console.log("\""+fWord+"\""+" is not an anagram of "+"\""+sWord+"\"");
}
var firstWord = "Mary";
var secondWord = "Army";
anagramFunction(firstWord,secondWord);

// 2.3 Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome.
//  Case sensitivity should be taken into account

function isPalindrome(string){
    let str=string.toLowerCase().split(' ').join('');
    let rev=str.split('').reverse().join('');
    if(str==rev)
        console.log("true");
    else
        console.log("false");
}
isPalindrome("racecar"); 
isPalindrome("race Car"); 

// [2.4]Check if a given string is a isomorphic
//     For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
//     to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
//     string A to every char of string B.

//     `paper` and `title` would return true.
//     `egg` and `sad` would return false.
//     `dgg` and `add` would return true.

function isIsomorphic (str1, str2) {
    if (str1.length != str2.length) {
        console.log("false");
        return 0;
    }
    var chMap = {};
    for (var i = 0; i < str1.length; i++) {
    	
        if (!chMap[str1[i]]) {   	
            chMap[str1[i]] = str2[i];
     
        } else if (chMap[str1[i]] !== str2[i]) {
            console.log("false");
            return 0;
        }
    }
    console.log("true");
    return 0;
}
    isIsomorphic("egg", 'add'); // true
    isIsomorphic("paper", 'title'); // true
    isIsomorphic("kick", 'side'); // false


