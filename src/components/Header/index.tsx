import { component$ } from '@builder.io/qwik';

import { useAppState } from '~/hooks/useAppState';
import { Breadcrumb } from '../Breadcrumb';

export const Header = component$(() => {
  const app = useAppState();

  return (
    <header class="flex">
      <Breadcrumb items={app.breadcrumbs} />
    </header>
  );
});
