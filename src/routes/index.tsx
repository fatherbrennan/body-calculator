import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { APP_TITLE, APP_URL_US_NAVY } from '~/constants';
import { useAppState } from '~/hooks/useAppState';
import { description as usNavyDescription, title as usNavyTitle } from '~/routes/us-navy';

import type { DocumentHead, LinkProps } from '@builder.io/qwik-city';

export interface NavItem extends Required<Pick<LinkProps, 'href' | 'title'>> {
  label: string;
}

export const head: DocumentHead = {
  title: APP_TITLE,
  meta: [{ name: 'description', content: 'Simple app for calculating various body compositions.' }],
};

export default component$(() => {
  const app = useAppState();
  const navItems: NavItem[] = [{ label: usNavyTitle, href: APP_URL_US_NAVY, title: usNavyDescription }];

  useVisibleTask$(() => {
    app.breadcrumbs.length = 1;
  });

  return (
    <nav>
      <ul class="flex flex-col bg-cyan-300">
        {navItems.map(({ href, label, title }) => (
          <li key={href}>
            <Link {...{ href, title }} class="flex rounded-sm bg-neutral-200 px-4 py-2 hover:bg-neutral-300">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});
