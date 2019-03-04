export const products = {
  valid_product: {
    expireDate: new Date(),
    name: 'Abacaxi',
    price: 30,
    status: 'active',
    token: 'ultr4s3cr3tm3g4t0k3n',
    type: 'Fruta',
    unit: 5
  },
  valid_product_invalid_token: {
    expireDate: new Date(),
    name: 'Abacaxi',
    price: 30,
    status: 'active',
    token: 'n3v3rw1l1b34nultr4s3cr3tm3g4t0k3n',
    type: 'Fruta',
    unit: 5
  },
  invalid_product: {
    expireDate: new Date(),
    name: 'Abacaxi',
    price: 30,
    status: 'active',
    token: 'n0tS0ultr4s3cr3tm3g4t0k3n',
    type: 'Fruta',
  },
  invalid_product_type_value: {
    expireDate: new Date(),
    name: 'Abacaxi',
    price: 30,
    status: 'unknown',
    token: 'ultr4s3cr3tm3g4t0k3n',
    type: 123
  },
}

export const messages = {
  missingUnit: "Field 'unit' is missing. ( is required)",
  missingDiscount: "Field 'discount' is missing. ( is required)",
  statusNotAllowed: "'status' value is not allowed. Should be one of: [active,inactive]",
  invalidType: "'type' type is wrong (should be 'string')",
}