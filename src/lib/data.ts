export const incomingData = [
  {
    id: 1,
    title: "SBC entity mismatch",
    child: [
      {
        id: 1.1,
        pi: "IM BRUNEU NV",
        peppolInvoiceNumber: "2575112",
      },
      {
        id: 1.2,
        pi: "IM BRUNEU NV",
        peppolInvoiceNumber: "2575112",
      },
      {
        id: 1.3,
        pi: "IM BRUNEU NV",
        peppolInvoiceNumber: "2575112",
      },
    ],
  },
  {
    id: 2,
    title: "Invoice validation errors",
    child: [
      {
        id: 2.1,
        pi: "ACME CORP LTD",
        peppolInvoiceNumber: "INV-2024-001",
      },
      {
        id: 2.2,
        pi: "ACME CORP LTD",
        peppolInvoiceNumber: "INV-2024-002",
      },
    ],
  },
  {
    id: 3,
    title: "Duplicate invoice detection",
    child: [
      {
        id: 3.1,
        pi: "GLOBAL SOLUTIONS BV",
        peppolInvoiceNumber: "GS-789456",
      },
      {
        id: 3.2,
        pi: "GLOBAL SOLUTIONS BV",
        peppolInvoiceNumber: "GS-789456",
      },
      {
        id: 3.3,
        pi: "GLOBAL SOLUTIONS BV",
        peppolInvoiceNumber: "GS-789457",
      },
      {
        id: 3.4,
        pi: "GLOBAL SOLUTIONS BV",
        peppolInvoiceNumber: "GS-789458",
      },
    ],
  },
  {
    id: 4,
    title: "Tax calculation discrepancies",
    child: [
      {
        id: 4.1,
        pi: "TECH INNOVATIONS SA",
        peppolInvoiceNumber: "TI-2024-Q1-15",
      },
    ],
  },
  {
    id: 5,
    title: "Currency conversion issues",
    child: [
      {
        id: 5.1,
        pi: "EURO TRADING GMBH",
        peppolInvoiceNumber: "ET-EUR-001",
      },
      {
        id: 5.2,
        pi: "EURO TRADING GMBH",
        peppolInvoiceNumber: "ET-EUR-002",
      },
      {
        id: 5.3,
        pi: "STERLING IMPORTS LTD",
        peppolInvoiceNumber: "SI-GBP-445",
      },
    ],
  },
  {
    id: 6,
    title: "Missing mandatory fields",
    child: [
      {
        id: 6.1,
        pi: "NORDIC SUPPLIES AB",
        peppolInvoiceNumber: "NS-2024-0789",
      },
      {
        id: 6.2,
        pi: "NORDIC SUPPLIES AB",
        peppolInvoiceNumber: "NS-2024-0790",
      },
      {
        id: 6.3,
        pi: "NORDIC SUPPLIES AB",
        peppolInvoiceNumber: "NS-2024-0791",
      },
      {
        id: 6.4,
        pi: "ALPINE SERVICES AG",
        peppolInvoiceNumber: "AS-CH-2024-12",
      },
      {
        id: 6.5,
        pi: "ALPINE SERVICES AG",
        peppolInvoiceNumber: "AS-CH-2024-13",
      },
    ],
  },
];
