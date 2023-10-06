import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = () => setCollapsed((prev) => !prev);
    const { t } = useTranslation();
    return (
        <div data-testid="sidebar" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                square
                size={ButtonSize.L}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={styles.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.links}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={styles.link}>
                    <MainIcon />
                    <span className={styles.linkText}> {t('Главная')}</span>
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={styles.link}>
                    <AboutIcon />
                    <span className={styles.linkText}> {t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
