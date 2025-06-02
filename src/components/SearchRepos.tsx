type SearchProps = {
    loadRepos: (reposName: string) => Promise<void>;
}
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import classes from './SearchRepos.module.css';
import type { KeyboardEvent } from "react";

const SearchRepos = ({loadRepos}:SearchProps) => {
    const [reposName, setReposName] = useState<string>("");

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            loadRepos(reposName);
        }
    };

    return (
        <div className={classes.search}>
            <h2>Busque por um repositório:</h2>
            <div className={classes.searchContainer}>
                <input type="text" placeholder="Digite o nome do repositório" 
                onChange={(e) => setReposName(e.target.value)}
                onKeyDown={handleKeyDown}/>
                <button onClick={() => loadRepos(reposName)}>
                    <BsSearch/>
                </button> 
            </div>
        </div>
    );
};

export default SearchRepos;