const TMDB_IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

const updatePictureUrls = (Result, width = 300) => {
    return {
        ...Result,
        backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${Result.backdrop_path}`,
        poster_path: `${TMDB_IMAGE_BASE_URL(width)}${Result.poster_path}`,
    };
};

export const getList = (Response) => {
    return !!Response ? [...Response.results.map((Result) => updatePictureUrls(Result))] : null;
};
