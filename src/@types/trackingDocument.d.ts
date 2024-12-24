interface TrackingDocument {
  Number: string;
  StatusCode: string;
  Status: string;
  CargoDescriptionString: string;
  PaymentMethod: string;
  DateCreated: string;
  ActualDeliveryDate: string;

  CityRecipient: string;
  WarehouseRecipient: string;
  RecipientFullNameEW: string;
  PhoneRecipient: string;

  CitySender: string;
  WarehouseSender: string;
  SenderFullNameEW: string;
  PhoneSender: string;
}

interface ParcelShortInfo {
  number: string;
  status: string;
}

interface GetDetailsProps {
  documentNumber: string;
  phoneNumber?: string;
}

interface RefreshStatusProps {
  documentNumbers: string[];
}
