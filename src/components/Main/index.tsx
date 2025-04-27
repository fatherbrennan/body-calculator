import { Slot, component$ } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="flex flex-col py-2">
      <Slot />
    </main>
  );
});
