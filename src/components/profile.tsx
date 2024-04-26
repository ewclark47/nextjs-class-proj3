'use client'

import { useSession } from "next-auth/react"

export default function Profile(){
    const session = useSession();

    if (session.data?.user){
        return <div>From Client: Welcome {JSON.stringify(session.data.user.name).replace(/\"/g, " ")}</div>
    }
    return <div>From Client: No User signed in</div>
}