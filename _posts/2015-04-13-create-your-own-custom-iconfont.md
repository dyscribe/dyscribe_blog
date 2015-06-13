---
layout: post
title:  "Create Your Own Icon Font with Icomoon"
excerpt: "Improve your website performance and stay flexible by using creating your own customized icon fonts with Icomoon."
categories: blog
tags: [webdevelopment, design, article]
image:
  feature: article-iconfont_new.jpg
  card: cards/iconfont.jpg
comments: true
share: true
date: 2015-04-13
---

The advantages of icon fonts are clear: crisp look on high density displays, [flexibility in size and color](//css-tricks.com/examples/IconFont/) and you can improve your websites performance compared to using regular images.

## Custom vs. Pre Built Font

There is already a number of web-services that will equip you with high quality and easy to use icon fonts. [Font Awesome](//fortawesome.github.io/Font-Awesome/) for example has been my choice for quite a while.

It worked well until I got to a point where the provided icons didn't cover my needs anymore. I wanted to use [Flattr](//flattr.com) on my blog but [Font Awesome doesn't provide a Flattr icon yet](//github.com/FortAwesome/Font-Awesome/issues/371). Also I wanted to improve my page speed by using my logo inside an icon font instead of a png file.

##### Tl;dr
> Using my own icon font I saved around 80% of the file size compared to a pre built font.

## Custom Icon Fonts with Icomoon
[Icomoon](//icomoon.io/) is a service that will help you to create and customize your own icon font. You can choose from a variety of pre built icons and also upload any SVG file to use inside that font. There's a  lot of free icons but you can also throw some money in for additional icons or a paid account where they will host the font for you.

In my case I wanted to host my font myself - to reduce external requests - but that's just me.

Here's how my current font looks like:

![Icomoon Custom Font](//dyscribe.com/images/iconfont/icomoon.jpg)

> The Icomoon web app is pretty minimalistic and self explaining, so I'll leave the details out here. If you're having trouble setting up, feel free to let me know in the comments.

Including the Sass and all font types (svg, woff, eot and ttf) it only weighs 168 Kb, where I have all of the icons used included. Font Awesome for example comes with around 1 Mb.
Also it allows me to easily adjust existing and add new icons at any time, by opening the `json` file that comes with the package, once you downloaded your Icomoon font.

##### Tl;dr
> If you want to self host your font, Icomoon is the perfect free tool of your choice. Hosted fonts are also available, but require some change.
