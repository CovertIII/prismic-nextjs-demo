import Prismic from 'prismic-javascript';

export const apiURL = "https://techup.cdn.prismic.io/api/v2";

export const getApi = () => Prismic.api(apiURL);
