import { ProjectType } from "@/types/Project";
import { client } from "../../sanity/lib/client";

async function findAll() {
    const query = `*[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        overview,
        'thumbnail': thumbnail.asset->url,
        previews[] {
            'url': image.asset->url,
            caption
        },
        description,
        urlwebsite,
        urlrepository,
    }`

    const data: ProjectType[] = await client.fetch(query);

    return data;
}

async function findOne(id: string) {
    const query = `*[_type == "project" && _id == '${id}'][0] {
        _id,
        title,
        overview,
        'thumbnail': thumbnail.asset->url,
        previews[] {
            'url': image.asset->url,
            caption
        },
        description,
        urlwebsite,
        urlrepository,
    }`

    const data: ProjectType = await client.fetch(query);

    return data;
}

const Project = {
    findAll,
    findOne,
}

export default Project;