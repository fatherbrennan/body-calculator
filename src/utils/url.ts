import { ASSET_VERSION } from '~/constants';

type Versioned<TPath extends string> = `${TPath}?v=${typeof ASSET_VERSION}`;

/** Add a version to a path. Used for parameter cache busting for assets. */
export const v = <T extends string>(path: T): Versioned<T> => `${path}?v=${ASSET_VERSION}` as Versioned<T>;
