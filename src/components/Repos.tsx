import type { ReposProps } from '../types/Repos';
import { MdCode } from 'react-icons/md';
import {MdStar} from 'react-icons/md';
import { MdForkRight } from 'react-icons/md';
import classes from './Repos.module.css';

const Repos = ({name, html_url, language, forks, stargazers_count}:ReposProps) => {
    return (
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
                <div className={classes.stars}>
                    <MdStar className={classes.icons}/>
                    <p className={classes.number}>{forks}</p>
                </div>
                <div className={classes.forks}>
                    <MdForkRight className={classes.icons}/>
                    <p className={classes.number}>{stargazers_count}</p>
                </div>
            </div>
            <a href={html_url} target="_blank" rel="noopener noreferrer">Ver código</a>
        </div>
    );
};

export default Repos;