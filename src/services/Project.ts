import { ProjectType } from "@/types/Project";
import { client } from "../../sanity/lib/client";

async function findAll(limit?: number) {
    let paginate = '';

    if (limit) {
        paginate = `[0...${limit}]`;
    }

    const query = `*[_type == "project"] | order(_createdAt desc) ${paginate} {
        _id,
        title,
        overview,
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

async function count() {
    const query = `count(*[_type == "project"])`

    const data: any = await client.fetch(query);

    return data;
}

const Project = {
    findAll,
    findOne,
    count,
}

export default Project;