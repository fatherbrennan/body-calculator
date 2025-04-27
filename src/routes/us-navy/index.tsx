import { component$, useVisibleTask$ } from '@builder.io/qwik';

import { APP_URL_US_NAVY } from '~/constants';
import { useAppState } from '~/hooks/useAppState';

import type { DocumentHead } from '@builder.io/qwik-city';

export const title = 'U.S. Navy Body Fat Calculator';
export const description = 'Body fat percentage calculator based on the U.S. Navy method.';

export const head: DocumentHead = {
  title,
  meta: [{ name: 'description', content: description }],
};

export default component$(() => {
  const app = useAppState();

  useVisibleTask$(() => {
    app.breadcrumbs.length = 1;
    app.breadcrumbs.push({ href: APP_URL_US_NAVY, label: title });
  });

  return <></>;
});
