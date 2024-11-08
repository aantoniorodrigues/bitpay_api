# BitPay API

## REST API Calls

#### Tokens (https://test.bitpay.com/tokens)

- request (POST)
- retrieve (GET)
- retrieve SIN(s) linked to an approved token (GET)
- link SIN to approved token (POST)
- remove SIN to approved token (DELETE)

#### Invoices and Refunds - they provide the exact same API calls for both of these categories (https://test.bitpay.com/invoices and https://test.bitpay.com/refunds)

- create (POST)
- update (PUT)
- retrieve (GET)
- retrieve by ID (GET)
- retrieve filtered by query (GET)
- retreive event token (GET)
- cancel (DELETE)
- cancel event by ID (DELETE)
- request resent (POST)

#### Settlements (https://test.bitpay.com/settlements)

- retrieve (GET)
- fetch reconciliation report (GET)

#### Ledgers (https://test.bitpay.com/ledgers)

- retrieve account balances (GET)
- retreive ledger entries (GET)

#### Recipients (https://test.bitpay.com/recipients)

- invite (POST)
- retrieve (GET)
- update (PUT)
- remove (DELETE)
- retrieve by status (GET)
- request resent (POST)

#### Payouts (https://test.bitpay.com/payouts)

- create (POST)
- create group (POST)
- retrieve (GET)
- retrieve filtered by query (GET)
- cancel (DELETE)
- cancel group (DELETE)
- request resent (POST)

#### Bills (https://test.bitpay.com/bills)

- create (POST)
- retrieve (GET)
- update (PUT)
- retrieve by status (GET)
- deliver via email (POST)

#### Subscriptions (https://test.bitpay.com/subscriptions)

- create (POST)
- retrieve (GET)
- update (PUT)
- retrieve by status (GET)

#### Rates (https://test.bitpay.com/rates/{basecurrency})

- retrieve all for given cryptocurrency (GET)
- retrieve for specific crypto/fiat pair (GET)

#### Sessions (https://test.bitpay.com/sessions)

- create API session (POST)

#### Currencies (https://test.bitpay.com/currencies)

- retrieve supported currencies (GET)

#### Wallets (https://test.bitpay.com/supportedwallets)

- retrieve supported wallets (GET)

## Error handling

#### Error response format

{
"status": "error",
"code": "010207",
"data": null,
"error": "Invalid invoice state for refund"
}

#### Error codes

HTTP Method (first 2 digits)

- 01xxxx - POST error
- 02xxxx - GET error
- 03xxxx - PUT error
- 04xxxx - DELETE error

Resource and Error (last 4 digits)

- xx0001 - resource not found
- xx0002 - invalid parameters
- xx0003 - missing parameters

Invoice Errors (xx01xx)

- xx0100 - generic invoice error
- xx0101 - invoice not found
- xx0102 - invalid parameters
- xx0108 - invoice missing email or SMS
- xx0109 - SMS not configured
- xx0110 - invoice price below threshold
- xx0111 - invoice price above threshold
- xx0112 - invalid SMS
- xx0113 - error verifying SMS
- xx0114 - high value tx or unable to update contact
- xx0115 - email already set on invoice
- xx0116 - unable to perform call outside demo env
- xx0117 - invalid invoice state
- xx0118 - misconfigured account

Refund Errors (xx02xx)

- xx0200 - generic refund error
- xx0201 - refund not found
- xx0202 - invalid parameters
- xx0203 - missing parameters
- xx0204 - active refund request already exists
- xx0207 - invalid invoice state for refund
- xx0208 - fees greater than refund amount

## Authentication and security

BitPay uses API tokens to authenticate each request.
