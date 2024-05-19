// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var filter = function(arr, fn) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// };

// // Example usage:
// const arr = [1, 2, 3, 4, 5, 6, 11, 12];
// const fn = num => num > 10;
// console.log(filter(arr, fn)); // Output: [11, 12]


// /**
//  * @param {integer} init
//  * @return { increment: Function, decrement: Function, reset: Function }
//  */
// var createCounter = function(init) {
//     const count = init || 0

//     const increment = function() {
//         count ++;
//         return count
//     }
//     const reset = function() {
//         count = 0 || init
//         return count
//     }
//     const decrement = function() {
//         count --;
//         return count
//     }
    
//   return { increment, decrement, reset };
// };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
//  * counter.decrement(); // 
 */

// function greating() {
//     const neme = ZAFARBEK

//     function Great() {
//         console.log(`Hello ${neme}`);
//     }
//     return Great
// }

// const Salomlashish = greating()
// Salomlashish()