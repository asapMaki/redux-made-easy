import { createDbUrl } from './api';

export const getTopTen = async ({ page, type }) => {
    const fullUrl = createDbUrl(`/${type}/top_rated`, {
        page,
    });
    console.tron.log(fullUrl);
    return fetch(fullUrl);
};

export const search = async ({ page, query, type }) => {
    const fullUrl = createDbUrl(`/search/${type}`, {
        page,
        query,
    });
    return fetch(fullUrl);
};

export const getDetails = async ({ id, type }) => {
    const fullUrl = createDbUrl(`/${type}/${id}`);
    return fetch(fullUrl);
};
