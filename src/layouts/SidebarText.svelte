<script lang="ts">
  let h1: number = $state(0);
  let h2: number = $state(0);

  type Props = {
    name?: string;
    text?: string;
  };

  const { name = 'April Hall', text = 'Your friendly neighborhood fullstack developer' }: Props = $props();
</script>

<h1 bind:clientWidth={h1} class="mx-auto mt-7 w-fit text-5xl">
  Hi, I'm <span class="font-bold">{name}</span>
</h1>
<hr class="border-subtext-0 mx-auto mt-4 border 2xl:border-t" style="width: {(h1 + h2) * 0.5}px" />
<h2 class="font-roboto mx-auto mt-4 w-fit font-extralight" bind:clientWidth={h2}>
  {text}
</h2>
