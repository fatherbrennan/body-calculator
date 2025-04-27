import { withTrailingSlash } from '~/utils/url';

/** App name. */
export const APP_TITLE = 'Body Calculator';

/** Version of the assets. */
export const ASSET_VERSION = 1745219827907;

/** Local language code. */
export const LOCAL_LANGUAGE_CODE = 'en-AU';
export const LOCAL_LANGUAGE_CODE_I18N = 'en_AU';

/** In `px`. */
export const SCREEN_SMALL_WIDTH = 640;

export const APP_URL_DOMAIN = import.meta.env.PROD ? 'fatherbrennan.github.io' : 'localhost:5173';
export const APP_URL_PROTOCOL = import.meta.env.PROD ? 'https' : 'http';
export const APP_URL_BASE = 'body-calculator';
export const APP_URL = withTrailingSlash(`/${APP_URL_BASE}`);
export const APP_URL_US_NAVY_PARAM = 'us-navy';
export const APP_URL_US_NAVY = withTrailingSlash(`${APP_URL}${APP_URL_US_NAVY_PARAM}`);
export const APP_URL_ICONS_PARAM = 'icons';
export const APP_URL_ICONS = withTrailingSlash(`${APP_URL}${APP_URL_ICONS_PARAM}`);
export const APP_URL_ABSOLUTE = withTrailingSlash(`${APP_URL_PROTOCOL}://${APP_URL_DOMAIN}${APP_URL}`);
export const APP_URL_ICONS_ABSOLUTE = withTrailingSlash(`${APP_URL_PROTOCOL}://${APP_URL_DOMAIN}${APP_URL_ICONS}`);
