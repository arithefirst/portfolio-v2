<script lang="ts">
  interface Props {
    children: Snippet;
    class: string;
  }

  const { children, class: className }: Props = $props();

  function dispatchKeypress() {
    const ctrlKEvent = new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    document.dispatchEvent(ctrlKEvent);
  }
</script>

<button class="cursor-pointer {className}" onclick={dispatchKeypress}>{@render children()}</button>
