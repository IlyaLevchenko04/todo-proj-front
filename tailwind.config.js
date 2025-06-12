/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      phone: '320px',
      'phone-m': '375px',
      tablet: '768px',
      'tablet-vertical': '1024px',
      laptop: '1280px',
      desktop: '1440px',
    },
    extend: {
      spacing: {
        't-container': '690px',
        't-v-container': '900px',
        'l-container': '1040px',
        'd-container': '1040px',
      },
    },
  },
};
