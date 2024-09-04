function ageSort(users) {
  let userCopy = [...users];
  let sorted = [];
  let minIndex = 0;

  while (userCopy.length > 0){

    for (let i = 0; i < userCopy.length; i++){
      if (userCopy[i].age < userCopy[minIndex].age){
        minIndex = i;
      }

    }
    sorted.push(userCopy[minIndex]);
    userCopy.splice(minIndex, 1);
  }

  return sorted;

}

function oddEvenSort(arr) {
  // Your code here
  //GOAL: Sort both odds and even in ascending order. Odds on the left and evens on the right (Must be in-place)
  //Mode: 
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
