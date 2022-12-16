// import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import headerLinks from 'data/headerLinks.json';
import HeaderLink from './Links';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState} from 'react';
import classNames from 'classnames';

export default function HeaderContainer() {
    const links = headerLinks;
    const home = links.find(link => link.content === 'Home');
    const asideRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [hambugerMenuState, setHambugerMenuState] = useState(false);

    useEffect(() => {
        let handler = (event: Event) => {
            
            if(hambugerMenuState && !asideRef.current?.contains(event.target as Node)){
                setHambugerMenuState(false);
            }
        };
        document.addEventListener('mousedown', handler);

        return() => {
            document.removeEventListener('mousedown', handler);
        };
    }, [asideRef, hambugerMenuState]);

    return (
        <header className={styles.header__container}>
            <div className={styles.logo}>
                {home ? <Link to={home.to} className={styles.logo__content}>F. Jackson</Link> : <h2 className={styles.logo__content}>F. Jackson</h2>}
            </div>
            <nav className={styles.nav}>
                {links.map((link) => (
                    <HeaderLink  
                        key={link.id}                  
                        {...link}
                    />
                ))}
            </nav>
            <AiOutlineMenuFold 
                className={styles.hambuger__open}
                onClick={() => setHambugerMenuState(true)}
            />
            <aside 
                className={classNames({
                    [styles.hambuger__menu]: true,
                    [styles['hambuguer__menu-active']]: hambugerMenuState
                })}
                ref={asideRef}
            >
                <AiOutlineMenuUnfold 
                    className={styles.hambuger__close}
                    onClick={() => setHambugerMenuState(false)}
                />
                <nav className={styles.hambuger__nav}>
                    {links.map((link) => (
                        <HeaderLink  
                            key={link.id}                  
                            {...link}
                        />
                    ))}
                </nav>
            </aside>
        </header>
    );
}