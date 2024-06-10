export interface Labelled {
    name: string;
    label: string;
}
export interface WishlistElementStatus {
    NEW: Labelled;
    RESERVED: Labelled;
    BOUGHT: Labelled;
    GIVEN: Labelled;
}
export const WishlistElementStatusKeys: WishlistElementStatus = {
    NEW: { name: "NEW", label: "New" },
    RESERVED: { name: "RESERVED", label: "Reserved" },
    BOUGHT: { name: "BOUGHT", label: "Bought" },
    GIVEN: { name: "GIVEN", label: "Given" },
}

export type WishlistElementStatusLiteral = keyof typeof WishlistElementStatusKeys;
