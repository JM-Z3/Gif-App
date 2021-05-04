export const ApiCall = async(st) => {

    const apiKey = 'Ve1x9kstfCTT0uu7F3aXW468gjBgs0XJ';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=3&q=${st}`;
    const resp = await fetch(url);
    const {data} = await resp.json();


    const gifs = data.map(d1 => {
        return {
            id:d1.id,
            url:d1.images.original.url,
            title:d1.title
        }
    })


    return gifs;


}