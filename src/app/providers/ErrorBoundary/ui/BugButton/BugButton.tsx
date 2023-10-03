import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';
import styles from './BugButton.module.scss';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    const throwError = () => setError(true);

    return (
        <Button onClick={throwError} className={classNames(styles.bugButton, {}, [className])}>
            {t('Вызвать ошибку')}
        </Button>
    );
};
