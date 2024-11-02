import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useUser = (username) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (username) {
            setLoading(true);
            setTimeout(() => {
                setUser({ username });
                setLoading(false);
            }, 1000);
        }
    }, [username]);

    return { user, loading };
};

const IndexPage = () => {
    const router = useRouter();
    const { username } = router.query;
    const { user, loading } = useUser(username);

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/');
        }
    }, [user, loading, router]);

    const goToSettings = () => {
        if (username) {
            router.push(`/users/${username}/settings`);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>This is the main page for {user?.username}.</h1>
            <button onClick={goToSettings}>Go to settings</button>
            <button onClick={() => router.push('/')}>Go to home</button>
            <button onClick={() => router.reload()}>reload</button>

        </div>
    );
};

export default IndexPage;
