import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';
import { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, type = 'text', placeholder, ...otherProps } = props;
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlurHandler = () => setIsFocused(false);
    const onFocusHandler = () => setIsFocused(true);
    const onSelectHandler = (event: SyntheticEvent<HTMLInputElement, Event>) => {
        setCaretPosition(event.currentTarget.selectionStart);
    };
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder} >`}</div>}
            <div className={styles.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    onSelect={onSelectHandler}
                    className={styles.input}
                    {...otherProps}
                />
                {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
            </div>
        </div>
    );
});
