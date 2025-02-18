<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import Clipboard from '$lib/icons/clipboard.svelte';
  let { text }: { text: string } = $props();

  function copyText() {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log('Successfully copied text to clipboard'))
      .catch((e) => console.error(`Error copying text: ${(e as Error).message}`));
  }
</script>

<Button
  class="align-center mt-2 flex w-full cursor-pointer justify-center md:mt-3"
  variant="outline"
  onclick={copyText}
>
  <Clipboard />
  <span>Copy</span>
</Button>
