import { TechStackType } from "@/types/TechStack";
import { client } from "../../sanity/lib/client";

async function findAll(limit?: number) {
    let paginate = '';

    if (limit) {
        paginate = `[0...${limit}]`;
    }

    const query = `*[_type == "techstack"] | order(order asc) ${paginate} {
        _id,
        name,
        'icon': icon.asset->url,
        url,
    }`

    const data: TechStackType[] = await client.fetch(query);

    return data;
}

const TechStack = {
    findAll,
}

export default TechStack;