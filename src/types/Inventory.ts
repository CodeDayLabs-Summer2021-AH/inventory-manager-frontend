export interface Inventory {
  id: number;
  slots: Slot[];
}

export interface Slot {
  id: number;
  name: string;
  quantity: number;
  section: string;
  verificationDate: string;
}
