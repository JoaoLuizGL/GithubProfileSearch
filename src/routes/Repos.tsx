import Search from '../components/Search';
import { useState } from 'react';
import type { UserProps } from '../types/User';
import User from '../components/User';
import Error from '../components/Error';    

const Repos: React.FC = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadRepos = async(userName: string) => {
        setError(false);
        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}/repos`)
        const data = await res.json();
        
        if (res.status !== 200) {
            setError(true);
            return;
        }

        const userData: UserProps = {
            avatar_url: data.avatar_url,
            login: data.login,
            location: data.location,
            followers: data.followers,
            following: data.following
        }
        setUser(userData);
    };

        return (
        <div>
            <Search loadUser={loadUser}/>
            {user && <User {...user} />}
            {error && <Error/>}
        </div>
    );
};

export default Repos