import { classNames } from 'shared/lib/classNames';
import styles from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link to={to} className={classNames(styles.appLink, { theme }, [className, styles[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
