'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/signin")
    }, [user])

    return (
        <div>
            <h1>Only logged in users can view this page</h1>
            <Link href="/">Go To  HomePage</Link>
        </div>
    );
}

export default Page;