import React from 'react';
import type { UserProps } from '../types/User';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './User.module.css';

const User = ({avatar_url, login, location, followers, following}:UserProps) => {
    return (
    <div>
        <div className={classes.user}>
            <div>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            </div>
            <div>
            {location && (
                <p className={classes.location}>
                <MdLocationPin/>
                <span>{location}</span>
                </p>    
            )}
            </div>
        <div className={classes.stats}>
        <div>
            <p>Seguidores: </p>
            <p className={classes.number}>{followers}</p>
        </div>
        <div>
            <p>Seguindo: </p>
            <p className={classes.number}>{following}</p>
        </div>
        </div>
        <Link to={`/repos/${login}`}> Ver Repositórios </Link>
        </div>
    </div>    
    );
};

export default User;