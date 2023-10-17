import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator: Decorator = (Story, context) => {
    const { state } = context.parameters;
    console.log(state);
    return (
        <StoreProvider initialState={state as DeepPartial<StateSchema>}>
            <Story />
        </StoreProvider>
    );
};
