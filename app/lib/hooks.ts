//creating a function / custumhook to redirect user to home route if not user is authenticated

import { auth } from '../lib/auth';
import { redirect } from "next/navigation";

export async function requireUser() {
    const session = await auth();

    if (!session?.user) {
        return redirect("/")
    }
}
