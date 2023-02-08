export default class invoice {
  id;
  description;
  amount = 0;
  price = 0;
  constructor(id, description, amount, price) {
    this.id = id;
    this.description = description;
    // exemplo teste com if
    if (amount > 0) {
      this.amount = amount;
    }
    // exemplo teste com ternario
    this.price = price > 0 ? price : 0;
  }
  GetTotalAmount() {
    return this.amount * this.price;
  }
  get TotalAmount() {
    return this.GetTotalAmount();
  }
}