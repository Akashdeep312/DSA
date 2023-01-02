//Auxillary funs
const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}



//1.factorial
//3!=>3x2x1=6
const fact = n => {
    if (n == 1) return n;
    return n * fact(n - 1);
}


//2.reverse an array using pointers 
const reverse = (arr, left, right) => {
    if (left >= right) return;
    swap(arr, left, right);
    reverse(arr, left + 1, right - 1);
}



//Sum Triangle for given array [✔️]
//input A[] = {4, 7, 3, 6, 7};
// 81
// 40  41
// 21  19  22
// 11  10   9   13
// 4   7   3   6    7 

//output 81 40 41 21 19 22 11 10 9 13 4 7 3 6 7
const getTriangle = (arr, n) => {
    if (arr.length == 0) {

        return;
    }
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i] + arr[i + 1]);
    }

    getTriangle(newArr, newArr.length - 1)
    console.log(arr)
}



//Find minimum and maximum element in an array
//input A[] = {4, 100, 3, 6, 1};

const findMinMax = (arr, n, min, max) => {
    if (n == arr.length) {
        console.log(min, max)
        return;
    }
    if (arr[n] > max) max = arr[n];
    if (arr[n] <= min) min = arr[n];


    findMinMax(arr, n + 1, min, max);


}


// Given an array of integers nums which is sorted in 
// ascending order, and an integer target, write a function
// to search target in nums. If target exists, then return its index.
// Otherwise, return -1.

const binarySearch = function (arr, x, low, high) {
    console.log("x, low, high", x, low, high)
    if (low > high)
        return -1;

    else
        mid = ~~((low + high) / 2)
    if (x == arr[mid])
        return mid

    else if (x > arr[mid])
        return binarySearch(arr, x, mid + 1, high)

    else
        return binarySearch(arr, x, low, mid - 1)
}
var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1)
};


//First uppercase letter in a string ( Recursive)
//geeksforgeeKs->K
//geekS->S
//Capital->65-91
//Small->97-122
//charCodeAt()

const findFirstCapital = (str, n) => {

    if (n == str.length) return -1;

    let charAscii = str.charCodeAt(n)
    if (charAscii > 64 && charAscii < 92) {
        return str[n]
    }
    return findFirstCapital(str, n + 1)
}


/**
 * https://leetcode.com/problems/detect-capital/
 * 
 * PROBLEM STATEMENT
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 * Given a string word, return true if the usage of capitals in it is right.
 * @param {string} word
 * @return {boolean} 
 */
var detectCapitalUse = function (word) {
    return findFirstCapitalLeetCode(word, 0, false)
};

const findFirstCapitalLeetCode = (str, n, flag) => {

    if (n == str.length) return flag;

    let charAscii = str.charCodeAt(n)
    if (charAscii > 64 && charAscii < 92) {
        flag = true
    } else {
        flag = false
    }
    return findFirstCapital(str, n + 1, flag)
}



//a,b and n =>86, 77, 15

const specialFabonacci = function (a, b, n) {
    if (n == 0) return a;
    if (n == 1) return b;
    return specialFabonacci(a, b, n - 1) ^ specialFabonacci(a, b, n - 2);
}

console.log("searchResult", specialFabonacci(62, 27, 90))