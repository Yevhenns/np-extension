import axios from 'axios';

export interface FetchInfoProps {
  documentNumber: string;
  phoneNumber?: string;
}

const API_KEY = import.meta.env.VITE_API_KEY as string;

export const getInfo = async ({
  documentNumber,
  phoneNumber,
}: FetchInfoProps) => {
  const requestBody = {
    apiKey: API_KEY,
    modelName: 'TrackingDocument',
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
