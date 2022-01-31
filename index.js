 "use strict";

 (function() {

   // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED HERE

   /**
    * Add a function that will be called when the window is loaded.
    */
   window.addEventListener("load", init);

   /**
    * CHANGE: Describe what your init function does here.
    */
   function init() {
     // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
   }

   /**
    * Make sure to always add a descriptive comment above
    * every function detailing what it's purpose is
    * Use JSDoc format with @param and @return.
    */
   function exampleFunction1() {
     /* SOME CODE */
   }

   /**
    * Make sure to always add a descriptive comment above
    * every function detailing what it's purpose is
    * @param {variabletype} someVariable This is a description of someVariable, including, perhaps, preconditions.
    * @returns {returntype} A description of what this function is actually returning
    */
   function exampleFunction2(someVariable) {
     /* SOME CODE */
     return something;
   }

   /** ------------------------------ Helper Functions  ------------------------------ */
   /**
    * Note: You may use these in your code, but remember that your code should not have
    * unused functions. Remove this comment in your own code.
    */

   /**
    * Returns the element that has the ID attribute with the specified value.
    * @param {string} idName - element ID
    * @returns {object} DOM object associated with id.
    */
   function id(idName) {
     return document.getElementById(idName);
   }

   /**
    * Returns the first element that matches the given CSS selector.
    * @param {string} selector - CSS query selector.
    * @returns {object} The first DOM object matching the query.
    */
   function qs(selector) {
     return document.querySelector(selector);
   }

   /**
    * Returns the array of elements that match the given CSS selector.
    * @param {string} selector - CSS query selector
    * @returns {object[]} array of DOM objects matching the query.
    */
   function qsa(selector) {
     return document.querySelectorAll(selector);
   }

   /**
    * Returns a new element with the given tag name.
    * @param {string} tagName - HTML tag name for new DOM element.
    * @returns {object} New DOM object for given HTML tag.
    */
   function gen(tagName) {
     return document.createElement(tagName);
   }

 })();
