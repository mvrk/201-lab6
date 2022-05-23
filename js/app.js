'use strict';

let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let cookieSection = document.getElementById("cookieSection");
let cityTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function getRandomInt(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}
// console.log(getRandomInt());

let cityObject = [];

// define constructor
function Citydata(city, minCust, maxCust, ave) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.ave = ave;
  this.totalCookies = 0;
  this.listHourSum = [];
  this.cityHourSum();
  cityObject.push(this);
}

// prototype inheritance
Citydata.prototype.gethourSum = function () {
  let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
  this.totalCookies += hourSum;
  return hourSum;
}
Citydata.prototype.cityHourSum = function () {
  for (let i = 0; i < hours.length; i++) {
    this.listHourSum.push(this.gethourSum());
  }
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
console.log(cityObject[0]);
function rendCitysales() {
  for (let j = 0; j < cityObject.length; j++) {
    cityObject[j].getRandomInt;
    cityObject[j].render();
  }
}
// rendCitysales();
generateTable();
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
  // document.querySelector('tfoot').remove();  
  cookieSection.deleteRow(-1);
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
  for (let i = 0; i < cityObject.length; i++) {
    let trElem = document.createElement('tr');
    let tdElem = document.createElement('td');
    tdElem.textContent = cityObject[i].city;
    trElem.appendChild(tdElem);
    tableElem.appendChild(trElem);

    for (let j = 0; j < hours.length; j++) {
      let tdElem2 = document.createElement('td');
      tdElem2.textContent = cityObject[i].listHourSum[j];
      trElem.appendChild(tdElem2);
    }

    let resultTd = document.createElement('td');
    resultTd.textContent = cityObject[i].totalCookies;
    trElem.appendChild(resultTd);
  }
  //hourly total cell
  let footElem = document.createElement('tfoot');
  let htotalElem = document.createElement('td');
  htotalElem.textContent = 'HourTotal';
  footElem.appendChild(htotalElem);

  for (let i = 0; i < cityObject.length; i++) {
    let currentCity = cityObject[i];
    for (let j = 0; j < currentCity.listHourSum.length; j++) {
      cityTotals[j] += currentCity.listHourSum[j];
    }
  }
  //grand total
  let grandTotal = 0;
  for (let i = 0; i < cityTotals.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = cityTotals[i];
    grandTotal += cityTotals[i];
    footElem.appendChild(tdElem);
  }

  // console.log(cityTotals);

  let tdElem = document.createElement('td');
  tdElem.textContent = grandTotal;
  footElem.appendChild(tdElem);
  tableElem.appendChild(footElem);
  cookieSection.appendChild(tableElem);
};


