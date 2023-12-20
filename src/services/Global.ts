import { GlobalType } from "@/types/Global";
import { client } from "../../sanity/lib/client";

async function findOne() {
    const query = `*[_type == "global"][0] {
        title,
        description,
        navbar,
    }`;

    const data: GlobalType = await client.fetch(query);

    return data;
}

const Global = {
    findOne,
}

export default Global;