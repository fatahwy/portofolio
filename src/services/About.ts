import { AboutType } from "@/types/About";
import { client } from "../../sanity/lib/client";

async function findOne() {
    const query = `*[_type == "about"][0] {
        name,
        role,
        'photo': photo.asset->url,
        description,
        urllinkedin,
        urlgithub,
    }`;

    const data: AboutType = await client.fetch(query);

    return data;
}

const About = {
    findOne,
}

export default About;