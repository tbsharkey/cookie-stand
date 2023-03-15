"use strict";


const salesHours = ["6:00AM", "7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM", "7:00PM"];


function CreateStore(cityName, minCust, maxCust, avgTik) {
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgTik = avgTik;

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

  for (let i = 0; i < salesHours.length; i++) {
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



function createHeader() {
  let findTable = document.getElementById("storeSales")
  let storeHeader = document.createElement("tr")
  let headerCol = document.createElement("th")

  findTable.appendChild(storeHeader)
  storeHeader.appendChild(headerCol)
  


for (let i = 0; i < salesHours.length; i++) {
  
    headerCol = document.createElement("th")
    headerCol.textContent = salesHours[i]
    storeHeader.appendChild(headerCol);

}


headerCol = document.createElement("th")
headerCol.textContent = "Daily Location Total"
storeHeader.appendChild(headerCol)
}


function createFooter() {

}


 createHeader();
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