// api.js

import axios from 'axios';

const API_BASE_URL = 'https://www.googleapis.com/drive/v3';

export const searchFileByName = async (apiKey, folderId, fileName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files`, {
      params: {
        q: `'${folderId}' in parents and name='${fileName}'`,
        key: apiKey,
      },
    });

    const files = response.data.files;
    if (files.length > 0) {
      return files[0]; // Return the first file found
    } else {
      throw new Error('File not found in the specified folder.');
    }
  } catch (error) {
    console.error('Error searching for file in Google Drive:', error);
    throw error;
  }
};
