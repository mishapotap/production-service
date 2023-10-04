import { useEffect, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';
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
        <Button onClick={throwError} theme={ThemeButton.OUTLINED} className={classNames('', {}, [className])}>
            {t('Вызвать ошибку')}
        </Button>
    );
};
