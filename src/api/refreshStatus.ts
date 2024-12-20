import axios from 'axios';

export interface FetchStatusProps {
  documentNumber: string[];
}

const API_KEY = import.meta.env.VITE_API_KEY as string;

export const refreshStatus = async ({ documentNumber }: FetchStatusProps) => {
  const requestBody = {
    apiKey: API_KEY,
    modelName: 'TrackingDocumentGeneral',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: documentNumber,
        },
      ],
    },
  };

  try {
    const response = await axios.post(
      'https://api.novaposhta.ua/v2.0/json/',
      requestBody
    );
    if (response.data.success) {
      return response.data.data[0] as TrackingDocument;
    } else {
      throw new Error(response.data.errors);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e.message as string);
  }
};
