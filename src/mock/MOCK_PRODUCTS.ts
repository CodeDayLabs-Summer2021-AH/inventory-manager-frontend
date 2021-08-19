import { LocationProducts } from "../types/Product"

export const MOCK_PRODUCTS: LocationProducts =
{
    id: 1,
    products: [
        {
            id: 1,
            sku: "TRE-MED-GRE-LEA",
            name: "Tree Solhold",
            row: "Row 1",
            section: "Section 5",
            quantityOnHand: 50,
            dateReceived: "2021-07-27T19:58:18.450+00:00",
            image: "https://i.imgur.com/9SzGfiH.png",
        },
        {
            id: 2,
            sku: "QTI-BIG-Q-TIP",
            name: "Q-Tip 2.0",
            row: "Row 2",
            section: "Section 10",
            quantityOnHand: 1000.5,
            dateReceived: "2021-07-27T19:58:18.450+00:00",
            image: "https://i.imgur.com/9SzGfiH.png",
        },
        {
            id: 3,
            sku: "VOL-VOL-QUA-FAX",
            name: "Voltquadfax",
            row: "Row 2",
            section: "Section 3",
            quantityOnHand: 6,
            dateReceived: "2021-07-27T19:58:18.450+00:00",
            image: "https://i.imgur.com/9SzGfiH.png",
        },
    ]
};