export default class Bill {
  constructor() {
    this.amounts = [];
  }

  addAmount(amountStr) {
    let total = Number.parseInt(amountStr, 10);
    return this.amounts.push(total);
  }

  getCount() {
    return this.amounts.length;
  }

  getTotal() {
    return this.amounts.reduce((total, current) => {
      return total + current;
    }, 0);
  }

  getAverage() {
    return this.getTotal() / this.getCount();
  }
}
