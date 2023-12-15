// const crypto = require('crypto');

// function sha256Hash(input) {
//   const hash = crypto.createHash('sha256');
//   hash.update(input);
//   return hash.digest('hex');
// }

// // Example usage
// const inputData = "example";
// const hashValue = sha256Hash(inputData);
// console.log(`SHA-256 hash value for "${inputData}" is ${hashValue}`);



function simpleHash(input) {
    let hash = 0;
  
    if (input.length === 0) return hash;
  
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
  
    return hash;
  }
  
  const inputData = "example";
  const hashValue = simpleHash(inputData);
  console.log(`Hash value for "${inputData}" is ${hashValue}`);
  