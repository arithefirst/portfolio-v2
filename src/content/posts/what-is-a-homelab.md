---
'title': 'What is a Homelab? (and why do I need one?)'
'date': '2025-06-05 1:00:00 PM EST'
'author': 'April Hall'
'wip': false
'description': 'Diving into what homelabs are and how they can be useful tools as well as a way to build new skills'
---

You may have heard the word "Homelab" floating around the internet for some time now. Hell, you may even have seen it in my very own ["about me](/)"! But what _are_ homelabs? In short, a homelab refers to any at-home server setup. You don't need expensive equipment like racks and enterprise servers; any old computer running a server <abbr title="Operating System">OS</abbr> will suffice.

I have a stupidly powerful government surplus HP Proliant that I got for super cheap off of eBay that runs Proxmox VE. For about $300 USD I was able to get:

- 1.8 TiB of SAS Storage
- 128 GB if DDR3 Ram
- Dual Intel Xeon CPUs
- Dual 80+ Titanium PSUs

But, again, you don't need to be fancy like me to have a homelab. A good friend of mine runs Proxmox on an old computer that she doesn't need anymore, and it still gets the job done.

## Why do I need a homelab?

Well, technically you _don't_ need a homelab, there is no universal authority forcing anybody to have one. However, having a homelab is an amazing way to learn new skills as well as run a bunch of useful tools on your home network.

For example, if you're new to Linux and want to learn more without installing it on your desktop or laptop, homelabbing gives you an opportunity to play around with it as you install software, manage Docker Compose stacks, and more!

It also allows you to run services that would cost a lot of money or just wouldn't be available at all otherwise! Some of my favorite homelab tools (especially for beginners) are below, and you can find even more stuff to host that I _didn't_ mention at [Awesome Selfhosted](https://awesome-selfhosted.net/).

<details>
<summary>Selfhostable stuff!</summary>

- [\*arr Suite](https://wiki.servarr.com/) & Media Server
  - A suite of applications designed to automate the downloading, organizing, and managing of media like movies, TV shows, and music
  - You can set up a service like [Jellyfin](https://jellyfin.org/) to view your content from anywhere in the world
  - You can add new media by setting up [Jellyseerr](https://docs.jellyseerr.dev/) and just searching for a show/movie and clicking "Download"
- [Pi-hole](https://pi-hole.net/)
  - Network-wide Ad blocker and DNS server
- Game Servers
  - Minecraft
  - Rust
  - etc.
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden)
  - Self hosted password management to prevent Password breaches (_cough cough_ LastPass _cough cough_) and ensure data privacy

</details>

Anyway, I hope that this little post convinced you to at least _think_ about setting up a homelab. It's a pretty fun project to have on the side at home and can be super useful after you get it all set up.

To summarize, homelabs are a fantastic way to learn new skills, experiment with different technologies, and run useful services on your home network. Remember, you don't need expensive equipment to get started. Even an old computer can be turned into a powerful homelab!

If you're interested in setting up a homelab, I encourage you to research different homelab setups and try out a simple self-hosted application like Pi-hole. I promise you, even the small stuff can be life-changing.
