import { db } from "@/db";
import Link from "next/link";
import { Chip } from "@nextui-org/react"; // styled kind of like a button
import paths from '@/paths'


export default async function TopicList(){
    const topics = await db.topic.findMany()

    const renderedTopics = topics.map((topic) => {
        return(
            <div key={topic.id}>
                <Link href={paths.showTopicPath(topic.slug)}>
                    <Chip color="warning" variant="shadow">
                        {topic.slug}
                    </Chip>
                </Link>
            </div>
        )
    })

    return(
        <div className="flex flex-row flex-wrap gap-2">
            {renderedTopics}
        </div>
    )
}