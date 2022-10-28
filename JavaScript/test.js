// var twoSum = function(nums, target) {
//   for (let i=0;i<nums.length;i++) {
//     for(let j=1;j<nums.length;j++) {
//       if (nums[i] + nums[j] == target) { 
//           return [i,j]
//       }
//     }
//   }
// }

// twoSum(nums = [3,2,4],9)


var twoSum = function(nums, target) {
  for (let i=0;i<nums.length;i++) {
    let oneNum = nums[0]
    if (oneNum + nums[i+1] == target) {
      console.log(oneNum,nums[i+1])
    }
  }
}

// twoSum([2,7,11,15],9)
twoSum([3,2,7,4],6)