import React from 'react';
import type { ReposProps } from '../types/Repos';
import { MdCode } from 'react-icons/md';
import {MdStar} from 'react-icons/md';
import { MdForkRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './Repos.module.css';

const Repos = ({owner, name, repos_url, language, forks, stargazers_count}:ReposProps) => {
    return (
    <div>
        <div className={classes.repos}>
            <h2>{name}</h2>
            <div>
            {language && (
                <div className={classes.language}>
                <MdCode className={classes.icons}/>
                <span>{language}</span>
                </div>
            )}
            </div>
        <div className={classes.stats}>
        <div>
            <MdStar className={classes.icons}/>
            <p className={classes.number}>{forks}</p>
        </div>
        <div>
            <MdForkRight className={classes.icons}/>
            <p className={classes.number}>{stargazers_count}</p>
        </div>
        </div>
        <Link to={`/repo/${owner}/${name}`} className=''>Ver código</Link>
        </div>
    </div>    
    );
};

export default Repos;