import {
    FAV_ICON_152_152,
    FAV_ICON_16_16,
    FAV_ICON_32_32,
    APPLE_TOUCH_ICON,
    FAV_ICON_192_192,
} from '../../images/favicons';
export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const LOAD_APP = 'boilerplate/App/LOAD_APP';
export const FAV_ICONS = [
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: FAV_ICON_152_152,
    },

    {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: FAV_ICON_192_192,
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: FAV_ICON_32_32,
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: FAV_ICON_16_16,
    },
    {
        rel: 'apple-touch-icon',
        href: APPLE_TOUCH_ICON,
    },
];
