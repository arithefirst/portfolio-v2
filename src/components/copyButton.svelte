<script lang="ts">
  import { toast } from 'svelte-sonner';
  import { Button } from '$lib/components/ui/button/index.js';
  import Clipboard from '$lib/icons/clipboard.svelte';
  let { text }: { text: string } = $props();

  function dispatchToast(text: string, success: boolean) {
    if (success) {
      toast.success(text);
    } else {
      toast.error(text);
    }
  }

  function copyText() {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.info('Successfully copied text to clipboard');
        dispatchToast('Successfully copied to clipboard.', true);
      })
      .catch((e) => {
        console.error(`Error copying text: ${(e as Error).message}`);
        dispatchToast('Copying failed. (See console)', false);
      });
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
