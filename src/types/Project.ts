export type ProjectType = {
    _id: string,
    title: string,
    overview: string,
    previews: { url: string, caption: string }[],
    description: any,
    urlwebsite: string,
    urlrepository: string,
}