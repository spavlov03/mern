var lengthOfLongestSubstring = function(s) {
  // initialize two pointers to create a window
  let start = 0
  // create an object to keep track of everything we've seen
  let seen = {}
  let max = 0
  // loop through the string until we find a repeated character
  for(let end = 0;end<s.length;end++){
      let current = s[end]
      // add current character to memory
      seen[end] = current
      // if we've seen this character before
      console.log("Seen in loop",seen)
      // console.log("max in loop---",max)
      if(seen[current]){
          start++
          delete seen[start]
          console.log("Seen in if",seen)
      // if this is a unique character
      }else{
          max++
          console.log("Seen in else",seen)
          // console.log("max in else---",max)
      }
  }

return max
  

};

lengthOfLongestSubstring("abcabcbb");
