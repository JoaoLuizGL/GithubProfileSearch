import { useState, useRef } from "react";
import classes from './SearchRepos.module.css';

type SearchProps = {
    onSearch: (search: string) => void;
};

const SearchRepos = ({ onSearch }: SearchProps) => {
    const [search, setSearch] = useState("");
    const debounceRef = useRef<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = window.setTimeout(() => {
            onSearch(value);
        }, 200);
    };

    return (
        <div className={classes.search}>
            <h2>Busque por um repositório:</h2>
            <div className={classes.searchContainer}>
                <input
                    type="text"
                    placeholder="Digite o nome do repositório"
                    value={search}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default SearchRepos;