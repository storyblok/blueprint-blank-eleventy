import { apiPlugin, storyblokInit } from '@storyblok/js';
import 'dotenv/config';

const { storyblokApi } = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  apiOptions: {
    region: 'eu', // Choose the correct region from your Space.
  },
  use: [apiPlugin],
});

export default storyblokApi;
