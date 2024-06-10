// data/dictionary.js
const questions= {
     1: {
          Question: 'What is the time complexity of the append() method for a Python ',
          Options: {
               1:"O(1)",
               2:"O(log n)",
               3:"O(n)",
               4:"O(n log n)",
          },
          answer:"O(1)"
     },
     2: {
          Question: 'Which data structure would be most appropriate for implementing a playlist for a music app?',
          Options: {
               1:"Stack",
               2:"Queue",
               3:"Array",
               4:"Linked List",
          },
          answer:"Linked List"
     },
     3: {
          Question: 'Suppose you have a Python list of n elements and want to sort it using the built-in sort() method. What is the time complexity of this operation?',
          Options: {
               1:"O(1)",
               2:"O(log n)",
               3:"O(n)",
               4:"O(n log n)",
          },
          answer:"O(n log n)"
     },
     4: {
          Question: 'What data structure can be used to efficiently track the order of elements while also allowing for quick searches?',
          Options: {
               1:"A doubly linked list with a tail pointer for quick appends",
               2:"A balanced binary search tree (BST) with a count of nodes for order tracking",
               3:"A hash table with a separate chaining mechanism using binary search trees",
               4:"An array with a parallel hash map indexing the elements",
          },
          answer:"A hash table with a separate chaining mechanism using binary search trees"
     },
     5: {
          Question: 'Suppose you have a large 3D NumPy array arr of shape (n, m, p) and want to compute the 3D convolution of arr with a 3D kernel of shape (k, l, q) using SciPy. What is the time complexity of this operation?',
          Options: {
               1:"O((n * m * p) * (k * l * q))",
               2:"O((n * m * p) * log(n * m * p))",
               3:"O((n * m * p) * (k * l * q) * log(n * m * p))",
               4:"O((n * m * p) * (k * l * q) * (n + m + p))",
          },
          answer:"O((n * m * p) * (k * l * q))"
     },
     6: {
          Question: 'Using SciPy, which function would you use to find the roots of the polynomial $$ p(x) = x^3 - 2x^2 + x - 2 $$?',
          Options: {
               1:"scipy.roots([1, -2, 1, -2])",
               2:"scipy.solve([1, -2, 1, -2])",
               3:"scipy.optimize.fsolve(lambda x: x**3 - 2*x**2 + x - 2, 0)",
               4:"scipy.linalg.eigvals([1, -2, 1, -2])",
          },
          answer:"scipy.optimize.fsolve(lambda x: x**3 - 2*x**2 + x - 2, 0)"
     },
     7: {
          Question: "When using NumPy, which method can be used to concatenate two arrays `a` and `b` vertically?",
          Options: {
               1:"np.vstack((a, b))",
               2:"np.hstack((a, b))",
               3:"np.concatenate((a, b), axis=0)",
               4:"np.merge((a, b), axis=1)",
          },
          answer:"np.vstack((a, b))"
     },
     8: {
          Question: 'You are given a data structure that is a combination of a binary tree and a linked list. Each node in the binary tree contains three fields: `value` (an integer), `left_child` (pointer to the left child), and `right_sibling` (pointer to the right sibling in the linked list). The `right_sibling` of the last node in each level of the binary tree points to the first node of the next level (similar to a level-order traversal where the last node of one level connects to the first node of the next level). \n Write a function to print the values of the nodes in this data structure in a zigzag order starting from the root. The zigzag order is defined as follows: print the values of the first level from left to right, the second level from right to left, and alternate between levels.',
          Options: {
               1:"Perform a level-order traversal using a queue and reverse every other level.",
               2:"Use a stack to process nodes and a boolean flag to toggle the direction for each level.",
               3:"Conduct a pre-order traversal and store the values in an array to print later in zigzag order.",
               4:"Implement a recursive depth-first search (DFS) that alternates between visiting left and right children.",
          },
          answer:"Use a stack to process nodes and a boolean flag to toggle the direction for each level."
     }
};

export default questions;
