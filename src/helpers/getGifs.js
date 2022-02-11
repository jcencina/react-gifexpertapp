export const getGif = async ( category ) => {
        // const apiKey = 'mLaB3yj63m6TBBg2o2mbysbs5dtqE8b2';
    // const peticion = fetch(`api.giphy.com/v1/gifs/search?api_key=${apiKey}`);
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=mLaB3yj63m6TBBg2o2mbysbs5dtqE8b2`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}