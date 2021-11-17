export const PREVIEW = process.env.NODE_ENV === 'development';
export const baseURL = PREVIEW 
  ? "http://localhost:3000/" 
  : "https://61920c7d1b080f000808941c--blogwithcontentful.netlify.app/";