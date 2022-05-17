let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let cookieSection = document.getElementById("cookieSection");
function getRandomInt(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}
console.log(getRandomInt());

// Seattle sales data

let seattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  ave: 6.3,
  totalCookies: 0,
  gethourSum: function () {
    let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
    this.totalCookies += hourSum;
    return hourSum;
  },
  render: function () {
    let pElem = document.createElement('p');
    cookieSection.appendChild(pElem);
    pElem.textContent = `${this.city}`;

    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);

    for (i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}am: ${this.gethourSum()} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
}
seattle.gethourSum();
seattle.render();

// Dubai sales data

let dubai = {
  city: 'Dubai',
  minCust: 3,
  maxCust: 24,
  ave: 1.2,
  totalCookies: 0,
  gethourSum: function () {
    let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
    this.totalCookies += hourSum;
    return hourSum;
  },

  render: function () {
    let pElem = document.createElement('p');
    cookieSection.appendChild(pElem);
    pElem.textContent = `${this.city}`;


    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);

    for (i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}am: ${this.gethourSum()} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
}
dubai.gethourSum();
dubai.render();

//Paris sales data

let paris = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  ave: 2.3,
  totalCookies: 0,
  gethourSum: function () {
    let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
    this.totalCookies += hourSum;
    return hourSum;
  },

  render: function () {
    let pElem = document.createElement('p');
    cookieSection.appendChild(pElem);
    pElem.textContent = `${this.city}`;


    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);

    for (i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}am: ${this.gethourSum()} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
}

paris.gethourSum();
paris.render();

//lima sales data

let lima = {
  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  ave: 4.6,
  totalCookies: 0,
  gethourSum: function () {
    let hourSum = Math.floor(getRandomInt(this.minCust, this.maxCust) * this.ave);
    this.totalCookies += hourSum;
    return hourSum;
  },

  render: function () {
    let pElem = document.createElement('p');
    cookieSection.appendChild(pElem);
    pElem.textContent = `${this.city}`;


    let ulElem = document.createElement('ul');
    pElem.appendChild(ulElem);

    for (i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}am: ${this.gethourSum()} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
}

lima.gethourSum();
lima.render();
