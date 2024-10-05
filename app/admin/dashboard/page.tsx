import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await auth();

    // Check the user's role and redirect if they are not an admin
    if (session?.user?.role != 'ADMIN') {
        console.log(session);
        redirect('/error'); // Redirect to the error page
    }

    return (
        <div>Admin Dashboard</div>
    );
}

export default Page;