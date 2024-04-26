'use client'

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react"; // this is needed for validating user sign in from a client component

interface ProvidersProps{
    children: React.ReactNode
}

export default function Providers({children}: ProvidersProps){
    return (
        <SessionProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
    )
}