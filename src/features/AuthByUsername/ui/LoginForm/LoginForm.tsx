import { classNames } from 'shared/lib/classNames';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import {
    getLoginStateUsername,
    getLoginStatePassword,
    getLoginStateIsLoading,
    getLoginStateError,
} from '../../model/selectors/selectors';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AsyncReducerLoader, ReducersList } from 'shared/lib/components/AsyncReducerLoader/AsyncReducerLoader';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginStateUsername);
    const password = useSelector(getLoginStatePassword);
    const isLoading = useSelector(getLoginStateIsLoading);
    const error = useSelector(getLoginStateError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <AsyncReducerLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(styles.loginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
                <Input autoFocus placeholder={t('Логин')} onChange={onChangeUsername} value={username} />
                <Input placeholder={t('Пароль')} onChange={onChangePassword} value={password} />
                <Button theme={ButtonTheme.OUTLINED} onClick={onLoginClick} disabled={isLoading} className={styles.loginBtn}>
                    {t('Войти')}
                </Button>
            </div>
        </AsyncReducerLoader>
    );
};

export default LoginForm;
