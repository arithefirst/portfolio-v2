---
'title': 'Building the Same App 5 Times to Pick the Best Framework'
'date': '2025-04-13 2:41:40 PM EST'
'author': 'April Hall'
'wip': true
---

For modern developers, the journey begins with a flood of choices, each carrying its own weight. For web developers, one of the most important decisions is the JavaScript framework they choose to learn. This choice isn't just a preference; it has the potential to shape the trajectory of your career, serving as a key reference point for the skills, opportunities, and professional identity you create along the way.

Personally, I got started on SvelteKit, and I kind of regret it. While Svelte and SvelteKit are amazing technologies with incredible DX and performance, it's very hard to find companies that use them due to how new they still are (created in 2016). For this reason, I wanted to explore what other options are out there, so I decided there was no better way to learn a new framework than to build the same thing in a bunch of them!

For this experiment, I'll be trying the following frameworks:

- **Svelte** with SvelteKit
- **React** with NextJS
- **Vue** with NuxtJS
- **Angular** with Analog
- **Solid** with SolidStart

There's really no specific reason I picked these frameworks, other than the fact that they're currently some of the most popular and widely used ones. In terms of the rest of the tech stack, I'll be using ShadCN for the UI, PostgreSQL on Neon for the database, and Clerk for authentication.

## Scoring System

To make sure all frameworks are graded fairly, I've created a scoring system with three different categories: Learning Curve, Funky Issues, and Performance. I could score it on more things, but I can't think of any more, so three should be fine.

| Category     | Score | Description                                                                         |
| :----------- | :---- | :---------------------------------------------------------------------------------- |
| Ease of use  | 10    | How easy is it to use the framework? (Higher is easier)                             |
| Performance  | 10    | How well does it perform? (Higher is faster)                                        |
| Funky Issues | 10    | Number of odd/difficult-to-solve issues encountered (Higher indicates fewer issues) |
| Total        | 30    | Total score based on the above categories                                           |

## Project Design

For this experiment, I'm going to be building a somewhat simple social media application called “Verity” (Vertical + Community), where the idea is that you have a single feed that constantly updates as new posts are created. This should be complex enough that it presents a somewhat reasonable challenge during development, but not so complex that it'll make me pull my hair out.

We'll need a table for posts with the following Drizzle schema:

```typescript
type framework = 'angular' | 'react' | 'solid' | 'svelte' | 'vue';
export const posts = pgTable('posts', {
  user: text('user').notNull(), // Clerk User ID
  id: varchar('id', { length: 36 }).primaryKey(), // Post ID (UUIDv4)
  content: text('content').notNull(), // Post content
  createdAt: timestamp('time', { mode: 'date' }).notNull().defaultNow(), // Time at which the post was created
  framework: varchar('framework', { length: 7 }).notNull().$type<framework>(), // Framework from which the post was made
});
```

Since we'll be using Clerk for authentication, I'm going to forgo creating a users table, as it won't be necessary.

For real-time communication between all Verity instances across all frameworks, we'll use PostgreSQL's `NOTIFY`/`pg_notify()` function to send notifications when rows in our `posts` table are updated, and the `LISTEN` command to subscribe to these notifications. We'll do this by running the following SQL in the Neon SQL Editor.

```sql
-- The function that gets run on row update
CREATE OR REPLACE FUNCTION notify_new_post()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify(
    'new_post',
    -- "NEW" is the updated row
    json_build_object('post', NEW)::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Run the function on row update
CREATE TRIGGER new_post_trigger
AFTER INSERT
ON posts  -- Use your table name 'posts'
FOR EACH ROW
EXECUTE PROCEDURE notify_new_post();
```

Then, we can listen to these from the node server and can run actions when the notifications are received.

## SvelteKit

I'm choosing to start with SvelteKit first, as it's the framework I started with and the one I have the most experience in. I created the starter using `bunx sv create verity-svelte`. In case you're curious, my selections for the wizard are in the dropdown below.

<details>

<summary>SV Create selections</summary>

- SvelteKit Minimal
- TypeScript
- Prettier, ESLint, Drizzle, and TailwindCSS
- No Tailwind Plugins
- PostgreSQL
- Neon
- Bun (I use bun as my default node runtime and package manager)

</details>

After that, I pasted my Drizzle schema into `src/lib/server/db/schema.ts` and finished setting up Drizzle and Git.

```bash
# git
cd verity-svelte
git init && git add -A && git commit -m "feat: Initial commit"
bun dev

# Drizzle
echo "DATABASE_URL='MY_NEON_CONNECTION_STRING'" > .env
bun db:push
```

From there, I began building the application. The first challenge I encountered was SvelteKit's lack of native support for websockets at the time of writing. While I am aware that websocket support is planned via UnJS' CrossWS platform (See [@sveltejs/kit PR #12973](https://github.com/sveltejs/kit/pull/12973)), we will need to use an alternative solution for now.

Server Sent Events (SSE) should suffice for our needs, as we only need to inform the client when new posts are added and do not require a two-way stream. To implement this simply, I used [@razshare/sveltekit-sse](https://github.com/razshare/sveltekit-sse) to produce and consume the SSEs with relative ease.

Another issue I ran into was with the appearance prop for Clerk components. Since the [Clerk SDK for svelte](https://github.com/wobsoriano/svelte-clerk) is unofficial, some things just don't work correctly. Global themes are one of these things. In React or an officially supported framework, you could do something like this:

```tsx
<ClerkProvider
      appearance=
        baseTheme: dark,
        variables: {
          // ...
        }
      }
    >
```

To globally theme all of the clerk components on your site. However, this doesn't work in the Svelte SDK. Because of that issue, you have to manually theme each Clerk component, and even then themes don't always apply. For example, when clicking on the user button, the dialog that pops up is un-themed and is forced to use the default Clerk theme.

Overall, here's how I would rate SvelteKit on our scale:

| Category     | Score | Explanation                                                                                                                     |
| :----------- | :---- | :------------------------------------------------------------------------------------------------------------------------------ |
| Ease of use  | 8     | Super easy to use with a low learning curve, but still some odd things that take a bit to wrap your head around.                |
| Performance  | 10    | Stupid fast on account that it compiles to plain HTML, CSS, and JS.                                                             |
| Funky Issues | 7     | Websockets were not natively supported, causing us to have to use SSE instead. There was also that issue with the Clerk themes. |
| Total        | 25/30 | -                                                                                                                               |

If you're interested, the code for the SvelteKit version of Verity can be found [here](https://github.com/veritysocial/verity-svelte)

## Vue

Alright, it's time to step out of my comfort zone by diving into the first non-Svelte framework: NuxtJS. I found the [installation guide](https://nuxt.com/docs/getting-started/installation) for Nuxt and started by running `bun create nuxt verity-vue`. In case you're curious, my selections for the wizard are in the dropdown below.

<details>

<summary>Create Nuxt selections</summary>

- Bun
- No
- No
- @nuxt/eslint

</details>

Out of the box, Nuxt is much more bare than what `sv create` let me do, but that's probably just me being spoiled by Rich Harris, and I can predict this will be a recurring theme. I went ahead and set up Prettier on my own and used the [Drizzle recipe](https://hub.nuxt.com/docs/recipes/drizzle) to get the ORM working.

Everything in Vue was super simple to use at first, and I was able to hit the ground running. I finished the UI super quickly, probably because it was very similar to the Svelte UI. I really do enjoy Vue a lot and didn't really run into any issues while using it, but that doesn't mean I loved it. A lot of the syntax seemed strange and alien to me. Take the way that Vue does iteration, for example:

```vue
<div v-for="..." />
```

This seems like a weird way to do it, and in my mind, the way most other frameworks do it (wrapping a component in a block that will repeat it for foo in bar) makes much more sense. However, I did find that this.

Another thing that felt weird to me was the way Vue does component props. Using a function that you pass types to is, in my opinion, a very odd way to handle props that I've never seen before. If you don't get what I mean, this is what props in Vue look like:

```vue
<!-- This example is taken
from the Vue Docs -->
<script setup lang="ts">
defineProps<
  title?: string;
  likes?: number;
>();
</script>
```

And this is what props in Svelte look like:

```svelte
<script lang="ts">
  interface Props {
    title?: string;
    likes?: number;
  }

  const { title, likes }: Props = $props();
</script>
```

It makes much more sense to use a destructured object with a type on it than to have a function that you call to export props. This is something I like about React/JSX as well, because they do pretty much the same thing, except you type your props in the function parameters instead of using a `$props()` rune.

I also had a lot of trouble with environment variables (Clerk keys and DB connection string) not being loaded when I built the server out of dev mode, resulting in the server erroring out and a 500 on the client. As it turns out, Nuxt doesn't load your environment variables from an env file or even bundle them into the application, as many other Vite-based JavaScript frameworks do. It wasn't a huge problem because opening up the docs revealed the answer immediately. Just like everything else so far, it was just a design decision that I wasn't a fan of.

There were a few other things I disliked about the Vue syntax that I won't go greatly into detail about, but here are the bullets:

- Being forced to wrap all pages/components in `<template>` tags
  - Requiring wrapped components makes sense in React, where files are TypeScript that return markup in a function, but it feels icky in a markup-only file.
- Markup based logic being controlled by the `v-foo` directives
- Multiple script tags (setup and regular)
- The required `:` before props/attribs that will contain javascript

By no means am I calling Vue/Nuxt a bad framework; I just disliked some of their syntax and design choices.

This is how I would score Nuxt on the scale:

| Category     | Score | Explanation                                                           |
| :----------- | :---- | :-------------------------------------------------------------------- |
| Ease of use  | 6     | Difficult to get the hang of at first, easy once you understand it.   |
| Performance  | 7     | Decently fast, but not 10/10 fast.                                    |
| Funky Issues | 10    | There weren't any real issues I faced while messing around with Nuxt. |
| Total        | 23/30 | -                                                                     |

## React

Moving on from Vue, the next framework on the list is React with NextJS. Just like the previous few frameworks, I pulled up the [docs](https://nextjs.org/docs/app/getting-started) and created a new NextJS App. In case you're following curious, my selections for the wizard are in the dropdown below. In addition, I installed and setup Prettier and Drizzle.

<details>

<summary>Create Next App selections</summary>

- Yes
- Yes
- Yes
- Yes
- Yes
- Yes

(lol)

</details>

Out of the gate, React was very refreshing. While many people dislike its syntax, I actually enjoy it quite a bit! NextJS' server components are also really cool, and while the idea of being able to run seemed a bit odd at first, it's actually pretty useful.

Despite me glazing NextJS, there are also some things I don't like. The main issue being: It's **Slooooooow**. It also, much like SvelteKit, has no direct support for websockets while using the App Router, but the implementation of a custom server wasn't too bad.

Other than that, NextJS was super easy to work with, and I had no trouble getting everything working.

This is how I would score NextJS on our scale:

| Category     | Score | Explanation                                                                                           |
| :----------- | :---- | :---------------------------------------------------------------------------------------------------- |
| Ease of use  | 10    | Easy to use and understand.                                                                           |
| Performance  | 5     | Fast initial page loads, took forever to load data from the DB, unlike both Svelte and Vue.           |
| Funky Issues | 9     | Websockets were not natively supported, but the implementation of a custom server wasn't challenging. |
| Total        | 24/30 | -                                                                                                     |
