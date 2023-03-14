"use strict";

let seattleStore = {
  minCustomers: 23,
  maxCustomers: 65,
  averageTicket: 6.3,

  randomCustomerCount(min, max) {
    let num = Math.random();
    let range = max - min + 1;
    let randomNumber = Math.floor(num * range) + min;
    return randomNumber;
  },

  totalCookies() {
    let customerCount = this.randomCustomerCount(this.minCustomers, this.maxCustomers);
    let randomTicket = this.averageTicket * customerCount;
    return Math.floor(randomTicket);
  },
};

console.log(seattleStore.totalCookies());
