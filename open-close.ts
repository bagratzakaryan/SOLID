// open close
interface CardDetails {
  cardNumber: number;
  fullName: string;
  expireDate: Date;
  CVV: number;
}

class BasePayment {
  cardDetails: CardDetails;

  async isEnaughMoney() {
    const response = await fetch("url", {
      body: JSON.stringify(this.cardDetails),
    });

    return await response.text();
  }
}

class PayPal extends BasePayment {
  async pay(value: string) {
    if (await this.isEnaughMoney()) {
      console.log("paied for paypal, amount: ", value);
    }
  }
}

class Bitcoin extends BasePayment {
  async pay(value: string) {
    if (await this.isEnaughMoney()) {
      console.log("paied for Bitcoin, amount: ", value);
    }
  }
}
