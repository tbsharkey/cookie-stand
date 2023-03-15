"use strict";

function CreateStore(cityName, minCust, maxCust, avgTik) {
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgTik = avgTik;
  this.salesHours = [
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
  ];
}



CreateStore.prototype.randomCustomerCount = function (min, max) {
  let num = Math.random();
  let range = max - min + 1;
  let randomNumber = Math.floor(num * range) + min;
  return randomNumber;
};

CreateStore.prototype.hourlyCookies = function () {

  let customerCount = this.randomCustomerCount(this.minCust, this.maxCust);
  let randomTicket = this.avgTik * customerCount;
  return Math.floor(randomTicket);

};

CreateStore.prototype.createRow = function () {

  let storeTable = document.getElementById("storeSales");
  let storeRow = document.createElement("tr");
  let storeCol = document.createElement("td");

  storeCol.textContent = this.cityName

  storeRow.appendChild(storeCol)
  storeTable.appendChild(storeRow)
  
  let totalCookies = 0

  for (let i = 0; i < this.salesHours.length; i++) {
    let randomCookies = this.hourlyCookies();
    totalCookies += randomCookies
   storeCol = document.createElement("td");
    storeCol.textContent = `${randomCookies}`;

    storeRow.appendChild(storeCol);
  }

  storeCol = document.createElement("td");
  storeCol.textContent = totalCookies;
  storeRow.appendChild(storeCol);


}







let seattleStore = new CreateStore("Seattle", 23, 65, 6.3);
seattleStore.createRow();

let tokyoStore  = new CreateStore("Tokyo", 3, 24, 1.2);
tokyoStore.createRow();

let dubaiStore = new CreateStore("Dubai", 11, 38, 3.7);
dubaiStore.createRow();

let parisStore = new CreateStore("Paris", 20, 38, 2.3);
parisStore.createRow();

let limaStore = new CreateStore("Lima", 2, 16, 4.6);
limaStore.createRow();