export const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8000"
    : "https://agile-fortress-60729.herokuapp.com";
export const HITS_PER_PAGE = 10;
