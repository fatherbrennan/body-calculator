import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import type { DocumentHead } from '@builder.io/qwik-city';

export const head: DocumentHead = {
  title: 'Body Calculator',
  meta: [{ name: 'description', content: 'Simple app for calculating various body compositions.' }],
};

export default component$(() => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome &#9996;</h1>

      <ul class="[&>li]:cursor-pointer">
        <li onClick$={() => navigate('/body-calculator/')}>/</li>
      </ul>
    </>
  );
});
