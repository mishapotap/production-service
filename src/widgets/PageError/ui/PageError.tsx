import { classNames } from 'shared/lib/classNames';
import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => location.reload();
    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ButtonTheme.OUTLINED} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
