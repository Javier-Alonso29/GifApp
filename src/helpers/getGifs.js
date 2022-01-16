export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/stickers/search?q=${ encodeURI(category) }&limit=10&api_key=nKfHQnIdbRZJVzEe73YtC8uK7T7y7ho9`
    const response = await fetch(url)
    const {data} = await response.json()

    const stikers = data.map( stiker =>{
        return {
            id: stiker.id,
            title: stiker.title,
            url: stiker.images?.downsized_medium.url
        }
    })

    return stikers
}