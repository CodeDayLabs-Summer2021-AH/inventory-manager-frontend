export interface Address {
  id: number;
  lineOne: string;
  lineTwo: string;
  lineThree: string;
  city: string;
  zipOrPostcode: string;
  stateProvinceCountry: string;
  countryId: string;
}

export interface Location {
  id: number;
  name: string;
  address: Address;
  rowCount: number;
  averageSlotsPerRow: number;
}
