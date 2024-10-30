export default interface IBook {
    cover: string,
    title: string,
    author: string,
    description: string,
    published: number,
    rating: number,
    links: {provider: string, url: string}[]
}