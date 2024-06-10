// data/dictionary.js
const questions= {
     1: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"Hello",
               2:"World",
               3:"'World'",
               4:"'W'",
          },
          answer:"World"
     },
     2: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"Hello",
               2:"World",
               3:"HelloWorld",
               4:"Hello World",
          },
          answer:"HelloWorld"
     },
     3: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"5",
               2:"-5",
               3:"0",
               4:"-1",
          },
          answer:"0"
     },
     4: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"25 25",
               2:"25 12",
               3:"12 25",
               4:"12 12",
          },
          answer:"25 12"
     },
     5: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"0",
               2:"-1",
               3:"1",
               4:"5",
          },
          answer:"1"
     },
     6: {
          Question: 'A C program includes a function with the following prototype, The function is supposed to read the content of a text file, reverse the order of the characters, and write the reversed content back to the same file. Which of the following statements is true regarding the implementation of this function?  Note: Select the efficent method',
          Options: {
               1:"The function uses getc and putc for character-wise file operations.",
               2:"The function uses a single pointer to both read from and write to the file.",
               3:"The function creates a temporary file to store the reversed content before writing it back",
               4:"The function relies on the standard librarys' strrev function to reverse the string in place.",
          },
          answer:"The function creates a temporary file to store the reversed content before writing it back"
     },
     7: {
          Question: "What is the maximum height of a B-Tree of order m (the maximum number of children per node is m) that can store n unique keys?",
          Options: {
               1:"logn (m)",
               2:"n^m",
               3:"logm (n)",
               4:"2^(m*n)",
          },
          answer:"logn (m)"
     },
     8: {
          Question: 'You are implementing a binary search algorithm to search for an element in a sorted array. However, the array is rotated at an unknown pivot point. What is the time complexity of finding the pivot point before performing the binary search?',
          Options: {
               1:"O(1)",
               2:"O(log n)",
               3:"O(n)",
               4:"O(n log n)",
          },
          answer:"O(n)"
     }
};

export default questions;
