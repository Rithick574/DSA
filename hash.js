
const s = "geeksforgeeks";

const arr = Array(26).fill(0);

for (let i = 0; i < s.length; i++) {
arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}

const ch = 'e';

// Get count
console.log(`The count of ${ch} is ${arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]}`);
