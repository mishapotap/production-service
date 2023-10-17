import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(() => setIsAuthModal(true), []);
    const onCloseModal = useCallback(() => setIsAuthModal(false), []);
    const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout} className={styles.links}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal} className={styles.links}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
