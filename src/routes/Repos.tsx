import Search from '../components/Search';
import { useState } from 'react';
import type { ReposProps } from '../types/Repos';
import Repos from '../components/Repos';
import Error from '../components/Error';    
import SearchRepos from '../components/SearchRepos';

const ReposPage: React.FC = () => {
    const [repos, setRepos] = useState<ReposProps | null>(null);
    const [error, setError] = useState(false);

    const loadRepos = async(userName: string) => {
        setError(false);
        setRepos(null);

        const res = await fetch(`https://api.github.com/users/${userName}/repos`)
        const data = await res.json();
        
        if (res.status !== 200) {
            setError(true);
            return;
        }

        const reposData: ReposProps = {
            name: data.name,
            repos_url: data.repos_url,
            languages: data.languages,
            forks: data.forks,
            stargazers_count: data.stargazers_count
        }
        setRepos(reposData);
    };

        return (
        <div>
            <SearchRepos loadRepos={loadRepos}/>
            {repos && <Repos {...repos} />}
            {error && <Error/>}
        </div>
    );
};

export default ReposPage;