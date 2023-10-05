import { classNames } from 'shared/lib/classNames';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = () => setCollapsed((prev) => !prev);
    return (
        <div data-testid="sidebar" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                {t('Переключить')}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
