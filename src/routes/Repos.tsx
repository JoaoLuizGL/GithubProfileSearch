import Search from '../components/Search';
import { useState } from 'react';
import type { ReposProps } from '../types/Repos';
import Repos from '../components/Repos';
import Error from '../components/Error';    
import SearchRepos from '../components/SearchRepos';

const ReposPage: React.FC = () => {

    console.log("ReposPage");
    const [repos, setRepos] = useState<ReposProps | null>(null);
    const [error, setError] = useState(false);

    const loadRepos = async(userName: string) => {

        console.log("loadRepos");

        setError(false);
        setRepos(null);

        // const res = await fetch(`https://api.github.com/users/${userName}/repos`)
        const res = await fetch("https://api.github.com/repos/freeCodeCamp/freeCodeCamp")
        const data = await res.json();

        console.log(res.status);
        
        if (res.status !== 200) {
            setError(true);
            return;
        }

        const reposData: ReposProps = {
            name: data.name,
            html_url: data.html_url,
            language: data.language,
            forks: data.forks,
            stargazers_count: data.stargazers_count
        }
        console.log(reposData);
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