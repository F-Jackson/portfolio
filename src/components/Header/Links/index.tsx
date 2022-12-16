import styles from './Links.module.scss';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface ILink {
    id: number,
    to: string,
    content: string,
}

export default function HeaderLink(  props: ILink ) {
    const location = useLocation();

    return (
        <Link
            to={props.to} 
            className={classNames({
                [styles.link]: true,
                [styles['link-active']]: location.pathname === props.to
            })}
        >
            {props.content}
        </Link>
    );
}