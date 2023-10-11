import { classNames } from 'shared/lib/classNames';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input placeholder={t('Логин')} autoFocus />
            <Input placeholder={t('Пароль')} />
            <Button className={styles.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
