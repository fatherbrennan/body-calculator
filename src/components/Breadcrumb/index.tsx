import { component$ } from '@builder.io/qwik';

import { cls } from '~/utils/cls';

import type { PropsOf } from '@builder.io/qwik';

import type { Breadcrumb as BreadcrumbType } from '~/types';

export interface BreadcrumbProps extends PropsOf<'nav'> {
  items: BreadcrumbType[];
}

export const Breadcrumb = component$<BreadcrumbProps>(({ items }) => {
  const commonClass = 'inline-flex rounded-xs py-1 px-2';

  return (
    <nav>
      <ol class="flex flex-row text-xs leading-tight">
        {items.map(({ href, label }, index) => (
          <li key={href} class={cls(index !== items.length - 1 && 'after:px-1 after:content-["/"]')}>
            {index !== items.length - 1 ? (
              <a href={href} class={cls(commonClass, 'bg-neutral-200 hover:bg-neutral-300')}>
                {label}
              </a>
            ) : (
              <span class={cls(commonClass, 'cursor-default bg-neutral-100')}>{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
});
