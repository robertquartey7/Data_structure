// /*
// Now, let's plan a big reunion dinner. Count the number of individuals who are parents, and the number who are not parents.

// Write a function that returns both of those counts using whatever data structure you'd like.

// Sample input and output:

//     1   2    4
//      \ /   / | \
//       3   5  8  9
//        \ / \     \
//         6   7    11

// const parentChildPairs = [
//   [1, 3], [2, 3], [3, 6], [5, 6],
//   [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
// ];

// # Returns
// 6, 4

// # because
// # 6 parents: 1,2,3,4,5,9
// # 4 non-parents: 6,7,8,11

// Complexity Analysis variables:

// n: the number of pairs in the input

// const parentChildPairs = [
//   [1, 3], [2, 3], [3, 6], [5, 6],
//   [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
// ];





// function uniqueVal(val){

//   let uniqueNumber = {
    
//   }
  
//     for(let i=0; i<val.length; i++){
      
//       if(!uniqueNumber[val[i][0]]){
//         uniqueNumber[val[i][0]] = true
//       }
//       if(!uniqueNumber[val[i][1]]){
//         uniqueNumber[val[i][1]] = true
//       }
      
//     }
    
    
//     let  result = Object.keys(uniqueNumber).map(element=>{
//       return element
//     })
    
//     return result
  
  
// }


// console.log(uniqueVal(parentChildPairs))

// // */




  
  
//   function uniqueParentChild(val){
    
//       let uniqueParent = {
      
//     }
//     let uniqueChild ={
      
      
//     }
    
//       for(let i=0; i<val.length; i++){
        
//         if(!uniqueParent[val[i][0]]){
//           uniqueParent[val[i][0]] = true
//         }
        
        
//         if(!uniqueChild[val[i][1]]){
//           uniqueChild[val[i][1]] = true
//         }
        
//       }
      
//       let  parent = Object.keys(uniqueParent).map(element=>{
//         return element
//       })
//        let  child =  []
       
//       Object.keys(uniqueChild).forEach(element=>{
          
        
//       })
      
   
      
//       return {
//         parent, child 
//       }
    
    
//   }
  
  
//   console.log(uniqueParentChild(parentChildPairs))