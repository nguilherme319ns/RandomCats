const axios = require('axios');

async function getRandomCat() {
  try {
    const response = await axios.get('https://aws.random.cat/meow');
    console.log('Random cat image URL:', response.data.file);
  } catch (error) {
    console.error('Error fetching cat image:', error);
  }
}

getRandomCat();
