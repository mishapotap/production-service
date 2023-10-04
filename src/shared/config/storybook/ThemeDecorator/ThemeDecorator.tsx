import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

// export const ThemeDecorator: Decorator = (Story, { args: { theme } }) => (
//     <div className={`app ${theme}`}>
//         <Story />
//     </div>
// );
export const ThemeDecorator: Decorator = (Story, context) => {
    const { theme = 'light' } = context.parameters;
    return (
        <ThemeProvider>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
