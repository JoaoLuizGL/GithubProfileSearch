type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import classes from './Search.module.css';
import type { KeyboardEvent } from "react";

const Search = ({loadUser}:SearchProps) => {
    const [userName, setUserName] = useState<string>("");

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            loadUser(userName);
            setUserName(""); // Limpa o input
        }
    };

    const handleClick = () => {
        loadUser(userName);
        setUserName(""); // Limpa o input
    };

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.searchContainer}>
                <input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleClick}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    );
};

export default Search;