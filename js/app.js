"use strict";

let seattleStore = {
  minCustomers: 23,
  maxCustomers: 65,
  averageTicket: 6.3,
  salesHours: ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],

  randomCustomerCount(min, max) {
    let num = Math.random();
    let range = max - min + 1;
    let randomNumber = Math.floor(num * range) + min;
    return randomNumber;
  },

  hourlyCookies() {
    let customerCount = this.randomCustomerCount(this.minCustomers, this.maxCustomers);
    let randomTicket = this.averageTicket * customerCount;
    return Math.floor(randomTicket);
  },

  createList: function() {
    for (let i = 0; i < this.salesHours.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${this.salesHours[i]}: ${this.hourlyCookies()} cookies`;
      seattleArr.appendChild(li);
    }
    let totalCookiePerStore = 0;
    for (let i = 0; i < this.salesHours.length; i++) {
      totalCookiePerStore += this.hourlyCookies();
    }
    let li = document.createElement("li");
    li.textContent = `Total: ${totalCookiePerStore} cookies`;
    seattleArr.appendChild(li);
  }
};

let seattleArr = document.getElementById("seattleSales");
seattleStore.createList();
