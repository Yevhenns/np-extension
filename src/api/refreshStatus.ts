import axios from 'axios';

export interface RefreshStatusProps {
  documentNumbers: string[];
}

const API_KEY = import.meta.env.VITE_API_KEY as string;

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
    const response = await axios.post(
      'https://api.novaposhta.ua/v2.0/json/',
      requestBody
    );
    if (response.data.success) {
      return response.data.data as TrackingDocument[];
    } else {
      throw new Error(response.data.errors);
    }
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
