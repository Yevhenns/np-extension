import axios from 'axios';

interface fetchInfoProps {
  documentNumber: string;
  phoneNumber?: string;
}

const API_KEY = import.meta.env.VITE_API_KEY;

export const getInfo = async ({
  documentNumber,
  phoneNumber,
}: fetchInfoProps) => {
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
    return response.data.data[0] as TrackingDocument;
  } catch (e) {
    console.log(e);
  }
};
