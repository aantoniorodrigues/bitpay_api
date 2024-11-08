// Initializing client

const {
  Client,
  Env,
  Currency,
  Models,
  Tokens,
  Invoice,
} = require("bitpay-sdk");

let client = new Client("config.json");

console.log(client);

// Creating an invoice

const invoice = new Invoice(10.0, "USD");

invoice.notificationEmail = "antoniocvpr@gmail.com";
invoice.notificationURL = "https://some-url.com";

const buyer = new Buyer();
buyer.name = "Test";
buyer.email = "antoniocvpr@email.com";
buyer.address1 = "168 General Grove";
buyer.country = "AD";
buyer.locality = "Port Horizon";
buyer.notify = true;
buyer.phone = "+990123456789";
buyer.postalCode = "KY7 1TH";
buyer.region = "New Port";

invoice.buyer = buyer;

const createdInvoice = await client.createInvoice(invoice);

// Retrieve the created invoice by ID and GUID

let retrieved_invoice = client.getInvoice(invoice.id);
let retrieved_invoice_by_guid = client.getInvoice(invoice.guid);

// Retrieve several invoices filtered by query

const retrieve_params = {
  dateStart: "2023-04-14",
  dateEnd: "2023-04-17",
  status: null,
  orderId: null,
  limit: null,
  offset: null,
};

const invoices = await client.getInvoices(retrieve_params);

// Update an existing invoice

const update_params = {
  buyerSms: "123321312",
};

const updatedInvoice = await client.updateInvoice(invoice.id, update_params);

// Cancel an existing invoice

function cancelInvoice(invoice_id) { 
  await client.cancelInvoice(invoice_id);
}

cancelInvoice(invoice.id);