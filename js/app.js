'use strict';

let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let cookieSection = document.getElementById("cookieSection");

function getRandomInt(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}
// console.log(getRandomInt());

let citySales = [];

// define constructor
function Citydata(city, minCust, maxCust, ave) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.ave = ave;
  this.totalCookies = 0;
  this.hourTotal = [];

  citySales.push(this);
}

// prototype inheritance
Citydata.prototype.gethourSum = function () {
  let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
  this.totalCookies += hourSum;
  return hourSum;
}
Citydata.prototype.render = function () {
  let pElem = document.createElement('p');
  cookieSection.appendChild(pElem);
  pElem.textContent = `${this.city}`;


  let ulElem = document.createElement('ul');
  pElem.appendChild(ulElem);

  for (let i = 0; i < hours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}:00 ${this.gethourSum()} cookies`;
    ulElem.appendChild(liElem);
  }

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(liElem);
}
// Initiate new objects
new Citydata('Seattle', 23, 65, 6.3);
new Citydata('Tokyo', 3, 24, 1.2,);
new Citydata('Dubai', 11, 38, 3.7);
new Citydata('Paris', 20, 38, 2, 3);
new Citydata('Lima', 2, 16, 4.6);

function rendCitysales() {
  for (let j = 0; j < citySales.length; j++) {
    citySales[j].getRandomInt;
    citySales[j].render();
  }
}

// rendCitysales();

// generate new object using form data
let myForm = document.getElementById('my-Form');

function handleSubmit(event) {
  event.preventDefault();

  let city = event.target.city.value;
  console.log(city);
  let minCust = +event.target.minCust.value;
  console.log(minCust);
  let maxCust = +event.target.maxCust.value;
  console.log(maxCust);
  let ave = +event.target.ave.value;
  console.log(ave);

  let newStore = new Citydata(city, minCust, maxCust, ave);
  newStore.gethourSum();
  // newStore.render();
  document.querySelector('table').remove();

  generateTable();
}
myForm.addEventListener('submit', handleSubmit);


// Table generation

function generateTable() {
  let tableElem = document.createElement('table');
  let headerRow = document.createElement('tr');
  // Creat the first 'City/Time' cell 
  let firstElem = document.createElement('th');
  firstElem.textContent = 'City/Time';
  headerRow.appendChild(firstElem);

  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = `${hours[i]}:00`;
    headerRow.appendChild(thElem);
  }
  //creat the 'total' cell
  let totalElem = document.createElement('th');
  totalElem.textContent = 'Total';
  headerRow.appendChild(totalElem);
  //wrap up head row
  tableElem.appendChild(headerRow);
  // nest looping, fast loop hourly cookies, slow loop, cities
  for (let i = 0; i < citySales.length; i++) {
    let trElem = document.createElement('tr');
    let tdElem = document.createElement('td');
    tdElem.textContent = citySales[i].city;
    trElem.appendChild(tdElem);
    tableElem.appendChild(trElem);
    for (let j = 0; j < hours.length; j++) {
      let tdElem2 = document.createElement('td');
      tdElem2.textContent = citySales[i].gethourSum();
      trElem.appendChild(tdElem2);
    }
    let resultTd = document.createElement('td');
    resultTd.textContent = citySales[i].totalCookies;
    trElem.appendChild(resultTd);

  }
  cookieSection.appendChild(tableElem);
};

generateTable();
// ---------------------------------------------------------------
// event handler

// let myForm = document.getElementById('my-Form');

// function handleSubmit(event) {
//   event.preventDefault();

//   let city = event.target.city.value;
//   console.log(city);
//   let minCust = +event.target.minCust.value;
//   console.log(minCust);
//   let maxCust = +event.target.maxCust.value;
//   console.log(maxCust);
//   let ave = +event.target.ave.value;
//   console.log(ave);

//   let newStore = new Citydata(city, minCust, maxCust, ave);
//   newStore.gethourSum();
//   newStore.render();
// }
//   myForm.addEventListener('submit', handleSubmit);


// looping call functions
// function rendCitysales() {
//   for (let j = 0; j < citySales.length; j++) {
//     citySales[j].getRandomInt;
//     citySales[j].render();
//   }
// }

// rendCitysales();


// ------------------------------------------------------------------
// Seattle sales data

// let seattle = {
//   city: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   ave: 6.3,
//   totalCookies: 0,
//   gethourSum: function () {
//     let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
//     this.totalCookies += hourSum;
//     return hourSum;
//   },
//   render: function () {
//     let pElem = document.createElement('p');
//     cookieSection.appendChild(pElem);
//     pElem.textContent = `${ this.city } `;

//     let ulElem = document.createElement('ul');
//     pElem.appendChild(ulElem);

//     for (i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${ hours[i] } am: ${ this.gethourSum() } cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${ this.totalCookies } cookies`;
//     ulElem.appendChild(liElem);
//   }
// }
// seattle.gethourSum();
// seattle.render();

// //Tokyo sales data

// let tokyo = {
//   city: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   ave: 1.2,
//   totalCookies: 0,
//   gethourSum: function () {
//     let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
//     this.totalCookies += hourSum;
//     return hourSum;
//   },

//   render: function () {
//     let pElem = document.createElement('p');
//     cookieSection.appendChild(pElem);
//     pElem.textContent = `${ this.city } `;


//     let ulElem = document.createElement('ul');
//     pElem.appendChild(ulElem);

//     for (i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${ hours[i] } am: ${ this.gethourSum() } cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${ this.totalCookies } cookies`;
//     ulElem.appendChild(liElem);
//   }
// }

// tokyo.gethourSum();
// tokyo.render();

// // Dubai sales data

// let dubai = {
//   city: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   ave: 3.7,
//   totalCookies: 0,
//   gethourSum: function () {
//     let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
//     this.totalCookies += hourSum;
//     return hourSum;
//   },

//   render: function () {
//     let pElem = document.createElement('p');
//     cookieSection.appendChild(pElem);
//     pElem.textContent = `${ this.city } `;


//     let ulElem = document.createElement('ul');
//     pElem.appendChild(ulElem);

//     for (i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${ hours[i] } am: ${ this.gethourSum() } cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${ this.totalCookies } cookies`;
//     ulElem.appendChild(liElem);
//   }
// }
// dubai.gethourSum();
// dubai.render();

// //Paris sales data

// let paris = {
//   city: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   ave: 2.3,
//   totalCookies: 0,
//   gethourSum: function () {
//     let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
//     this.totalCookies += hourSum;
//     return hourSum;
//   },

//   render: function () {
//     let pElem = document.createElement('p');
//     cookieSection.appendChild(pElem);
//     pElem.textContent = `${ this.city } `;


//     let ulElem = document.createElement('ul');
//     pElem.appendChild(ulElem);

//     for (i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${ hours[i] } am: ${ this.gethourSum() } cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${ this.totalCookies } cookies`;
//     ulElem.appendChild(liElem);
//   }
// }

// paris.gethourSum();
// paris.render();

// //Lima sales data

// let lima = {
//   city: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   ave: 4.6,
//   totalCookies: 0,
//   gethourSum: function () {
//     let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
//     this.totalCookies += hourSum;
//     return hourSum;
//   },

//   render: function () {
//     let pElem = document.createElement('p');
//     cookieSection.appendChild(pElem);
//     pElem.textContent = `${ this.city } `;


//     let ulElem = document.createElement('ul');
//     pElem.appendChild(ulElem);

//     for (i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${ hours[i] } am: ${ this.gethourSum() } cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${ this.totalCookies } cookies`;
//     ulElem.appendChild(liElem);
//   }
// }

// lima.gethourSum();
// lima.render();
