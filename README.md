# Abdallah | Developer Portfolio

Live: https://abdullaahi-developer.github.io/

A futuristic glassmorphism portfolio in plain HTML, CSS and JavaScript (no build step).

## Edit your content

Everything you need to change is in **one object at the top of `js/main.js`** called `SITE`:

- `profile`: name, location, photo, typing titles, intro, about text, skills
- `contact`: WhatsApp number (digits only, with country code), email, GitHub link
- `roadmap`: the timeline items
- `projects`: each project's name, descriptions, tech, links, screenshots and modules

An empty link (`''`) hides its button.

## Replace the images

1. Put your photo in `assets/` (for example `assets/me.jpg`) and set `profile.photo` to that path.
2. Put real screenshots in `assets/projects/<project>/` and change the file names in that project's
   `screenshots` list and in each module's `image`. PNG, JPG, WEBP and SVG all work.
3. Keep screenshots around 1600 x 1000 pixels and module images around 400 x 300 for the best look.

## Publish changes

Commit and push to the `main` branch. GitHub Pages updates the live site within a minute or two.
