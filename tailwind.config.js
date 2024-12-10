import react from '@vitejs/plugin-react-swc';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      WantedSans: ['WantedSans'],
    },
  },
};
export const plugins = [react()];
