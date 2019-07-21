const MOVIE_DB_API_KEY = '4ac3c22ed14d93e6b91c586bd384bbb1';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

export const createDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
    if (queryParams) {
        Object.keys(queryParams).forEach((paramName) => (baseUrl += `&${paramName}=${queryParams[paramName]}`));
    }
    return baseUrl;
};
