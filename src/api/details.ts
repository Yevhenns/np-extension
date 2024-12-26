import { useSettingsStore } from '@/store/settings';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getDetails = async ({
  documentNumber,
  phoneNumber,
}: GetDetailsProps) => {
  const store = useSettingsStore();

  const requestBody = {
    apiKey: store.API_KEY,
    modelName: 'TrackingDocumentGeneral',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: documentNumber,
          Phone: phoneNumber,
        },
      ],
    },
  };
  try {
    const response = await axios.post('', requestBody);
    if (response.data.success) {
      return response.data.data[0] as TrackingDocument;
    } else {
      throw new Error(response.data.errors);
    }
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const refreshStatus = async ({
  documentNumbers,
}: RefreshStatusProps) => {
  const store = useSettingsStore();

  const requestBody = {
    apiKey: store.API_KEY,
    modelName: 'TrackingDocumentGeneral',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: documentNumbers.map(DocumentNumber => ({ DocumentNumber })),
    },
  };
  try {
    const response = await axios.post('', requestBody);
    if (response.data.success) {
      return response.data.data as TrackingDocument[];
    } else {
      throw new Error(response.data.errors);
    }
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
