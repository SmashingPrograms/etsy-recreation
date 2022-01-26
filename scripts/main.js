// const student = {
//   name: 'Mady',
//   pet: 'Charlie',
//   hometown: 'Greenville',
// };

// const source = document.getElementById("student-template").innerHTML;
// const template = Handlebars.compile(source);
// // const context = student;
// const html = template(student);
// document.querySelector('.student-info').innerHTML = html;

// (function() {
//     'use strict';
  
//     const API_KEY = 'qIvGEp08BeV2JQsvbx4FG9kl3FjEAquYVZxQyc6s';
//     const BASE_URL = 'https://api.nasa.gov';
  
//     let rover = 'curiosity';
  
//     let earthDate = '2022-1-2';
  
//     const generateHTML = (data) => {
//       console.log(data)
//        const source = document.getElementById('rover-image-template').innerHTML;
//        const template = Handlebars.compile(source);
//        const html = template(data);
//        document.querySelector('.container').innerHTML = html;
//     };
  
//     fetch(`${BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&api_key=${API_KEY}`)
//       .then(response => response.json())
//       .then(data => generateHTML(data));
    
//   })();

const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
let searchTerm = 'felix_the_cat';
let limit = '12';

$.ajax({
    url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
    dataType: 'jsonp',
    method: 'GET',

    success: function(data) {
        console.log(data);
        const source = document.getElementById('etsy-template').innerHTML;
        const template = Handlebars.compile(source);
        const html = template(data);
        document.querySelector('.container').innerHTML = html;
    },


    error: function (xhr) {
        console.log('Uh oh! Something went wrong.', xhr.status);
    }

});