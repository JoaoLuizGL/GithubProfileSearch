import React from 'react';
import type { ReposProps } from '../types/Repos';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './User.module.css';

const Repos = ({name, repos_url, languages, forks, stargazers_count}:ReposProps) => {
    return (
    <div>
        <div className={classes.user}>
            <div>
            <img src={name} alt={repos_url} />
            <h2>{repos_url}</h2>
            </div>
            <div>
            {languages && (
                <p className={classes.languages}>
                <MdLocationPin/>
                <span>{languages}</span>
                </p>    
            )}
            </div>
        <div className={classes.stats}>
        <div>
            <p>Seguidores: </p>
            <p className={classes.number}>{forks}</p>
        </div>
        <div>
            <p>Seguindo: </p>
            <p className={classes.number}>{stargazers_count}</p>
        </div>
        </div>
        <Link to={`/repos/${repos_url}`}> Ver Repositórios </Link>
        </div>
    </div>    
    );
};

export default Repos;