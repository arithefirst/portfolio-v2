---
'title': 'Vibe Coding and LLMs in Code'
'date': '2025-04-27 1:12:19 PM EST'
'author': 'April Hall'
'wip': false
'description': 'My thoughts on "Vibe Coding" and using LLMs for your code in 2025'
---

"Vibe Coding" and using large language models such as Anthropic Claude, OpenAI's GPT-4.1, and Google's Gemini 2.5 Pro for your code are sort of hot topics right now. There are many people who believe that these tools are useful to help you with programming, and many that disagree as well.

Generally, I'm part of the group of people that think that using AI in your code is a bad thing, except for the following three conditions:

1. You fully understand what is being generated and put into your codebase.

2. You are working on a tedious, repetitive task that would take a lot longer to do if you had done it yourself.

3. Documentation lookups

I'll break down why I think these rules are important one at a time.

## Understanding Generated Code

Understanding generated code is the most important of these three rules. It's very important, as there are currently a large number of people, often referring to themselves as "Vibe Coders," who don't understand anything that they're doing. The number of people that I've seen who just run prompt after prompt after prompt and have no idea what their codebase is doing is truly disheartening.

People like this are truly screwed when it comes to fixing bugs or getting any sort of programming-related job. Think about it this way: If you vibe coded a SaaS and noticed there was a bug in your payment implementation that allowed users to skip the checkout and bypass your payment layer, the only thing you're able to do to solve this is to say, "Hey ChatGPT, XYZ is happening, fix it."

You can obviously see why this is an issue, as AI has a tendency to hallucinate code that often does not do the expected outcome properly, and the bug may not ever get resolved. However, if you wrote that payment layer yourself and only used AI every now and again to help with small things, you would fully understand what's happening in that layer and would be able to solve the bug on your own.

Just spamming prompts and "vibe coding" is a terrible way to write code and will prevent you from learning anything.

## Tedious and Repetitive Tasks

This rule is pretty simple to understand and is 99.999% of what I use AI for when I'm coding. I often find that I need to do something tedious or repetitive, such as converting one data type into another (e.g., CSV -> JS Object), repeatedly refactoring the code in a similar way, etc.

I think this is 100% an acceptable use of AI, as you're not using it to really generate code; you're just making an annoying task that would take forever to do go a lot quicker.

## Documentation Lookups

Often, I find that online documentation for some libraries and packages is either terrible or nonexistent. Using AI for finding docs from the internet or generating docs from an installed package in `node_modules`.

This is another thing that I find myself using AI for a lot, but it should be noted that the docs that AI generates can often be wrong, and it's almost always better to try to find docs online and pray that they're not bad.
