import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size = ButtonSize.M, type = 'button', disabled, ...otherProps } = props;

    const mods = { [styles.square]: square, [styles.disabled]: disabled };

    return (
        <button
            type={type}
            disabled={disabled}
            className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
