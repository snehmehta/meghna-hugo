---
title: "DTrust"
date: 2018-09-12T14:51:12+06:00
image_webp: images/portfolio/instagram.png
image: images/portfolio/instagram.png
title: "DTrust "
subTitle: "Maintain trust integretity in diamond market, by validating each transaction and continous monitoring. "
downloadLink: ""
technology: ["Flutter", "Firebase", "Cloud Functions"]
features:
- title: " Look"
  subTitle: "We provide marketing to businesses digital media."
- title: "Trendy "
  subTitle: "We provide  to businesses digital media."
- title: "Trendy Look"
  subTitle: "We provide marketing to  digital media."
- title: "Trendy Look"
  subTitle: "We provide  to businesses digital ."
- title: "Trenook"
  subTitle: "We provide marketing to businesses digital media."
- title: "Trenook"
  subTitle: "We provide marketing to businesses digital media."

screenshots: ["images/portfolio/phone1.png","images/portfolio/igpost.png"]

reviews:
- review: "Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. "
  customer: "this and that"
  designation: "Something"
  image: images/client/client-1.jpg
- review: " We love our new space and know that it was built by the very best!"
  customer: "oho"
  designation: "that"
  image: images/client/client-2.jpg
  
---

# Dillinger
## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][PlDb]         |
| GitHub           | [plugins/github/README.md][PlGh]          |
| Google Drive     | [plugins/googledrive/README.md][PlGd]     |
| OneDrive         | [plugins/onedrive/README.md][PlOd]        |
| Medium           | [plugins/medium/README.md][PlMe]          |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 o