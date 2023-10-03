import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // Synthetic delay to test Suspense HOC
            setTimeout(() => resolve(import('./AboutPage')), 1000);
        }),
);
