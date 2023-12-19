export default interface Project {
    _id: string,
    title: string,
    overview: string,
    thumbnail: string,
    previews: { url: string, caption: string }[],
    description: any,
    urlwebsite: string,
    urlrepository: string,
}