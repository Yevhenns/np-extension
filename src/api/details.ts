import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getDetails = async ({
  documentNumber,
  phoneNumber,
}: GetDetailsProps) => {
  const requestBody = {
    apiKey: API_KEY,
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
    const response = await axios.post(API_URL, requestBody);
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
  const requestBody = {
    apiKey: API_KEY,
    modelName: 'TrackingDocumentGeneral',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: documentNumbers.map(DocumentNumber => ({ DocumentNumber })),
    },
  };
  try {
    const response = await axios.post(API_URL, requestBody);
    if (response.data.success) {
      return response.data.data as TrackingDocument[];
    } else {
      throw new Error(response.data.errors);
    }
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
