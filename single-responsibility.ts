// single responsibility
class Invoice {
  createInvoice(): void {
    console.log("created invoice");
  }

  getInvoice(): void {
    console.log("get created invoice");
  }

  // not allowed
  displayModal(): void {
    console.log("displayed");
  }
}
