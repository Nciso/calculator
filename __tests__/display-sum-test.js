'use strict'
const fs = require('fs')
const path = require('path')



test('displays the correct sum after user use this function', () => {
  // Set up our document body
 
  
  const htmlFile =  fs.readFileSync(path.resolve(__dirname,'../index.html'), 'utf8');
  document.body.innerHTML = htmlFile
  const operations = require('../operations.js')
  const numbers = document.getElementsByClassName("numbers-tiles")[0].childNodes
  const seven = Array.prototype.filter.call(numbers, function(testElement){
    console.log(testElement.textContent)
    return testElement.textContent == '7'
    
  })[0]
  const five = Array.prototype.filter.call(numbers, function(testElement){
    return testElement.textContent == '5'
  })[0]
  seven.click()
  five.click()
  
  expect(operations.sum).toBeCalled();
  //expect($('#username').text()).toEqual('Johnny Cash - Logged In');
});