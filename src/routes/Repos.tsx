import Search from '../components/Search';
import { useState, useEffect } from 'react';
import type { ReposProps } from '../types/Repos';
import Repos from '../components/Repos';
import Error from '../components/Error';    
import SearchRepos from '../components/SearchRepos';
import { useParams } from 'react-router-dom';

const ReposPage: React.FC = () => {
    const { userName } = useParams<{ userName: string }>();
    const [repos, setRepos] = useState<ReposProps[]>([]);
    const [error, setError] = useState(false);

    const loadRepos = async(userName: string) => {
        setError(false);
        setRepos([]);

        const res = await fetch(`https://api.github.com/users/${userName}/repos`)
        const data = await res.json();

        if (res.status !== 200) {
            setError(true);
            return;
        }

        const reposData: ReposProps[] = data.map((repo: any) => ({
            name: repo.name,
            html_url: repo.html_url,
            language: repo.language,
            forks: repo.forks,
            stargazers_count: repo.stargazers_count
        }));

        setRepos(reposData);
    };

    useEffect(() => {
        if (userName) {
            loadRepos(userName);
        }
    }, [userName]);

    return (
        <div>
            <SearchRepos loadRepos={loadRepos}/>
            <div className="repos-container">
                {repos.map((repo) => (
                    <Repos key={repo.html_url} {...repo} />
                ))}
            </div>
            {error && <Error />}
        </div>
    );
};

export default ReposPage;