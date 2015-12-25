---
layout: post
title:  "Podcasting with Jekyll in 4 Steps"
excerpt: "After a while of pondering around the idea of an podcast I finally had an idea worth going for and started a new podcasting project. Check out how to set up Jekyll for podcasting in a few simple steps."
categories: podcasting
tags: [podcasting, jekyll, itunes, rss]
image:
  feature: article-podcasting-studio.jpg
  card: cards/podcasting-studio.jpg
comments: true
share: true
date: 2015-12-24
---

Most people struggle with the audio and sound side of podcasting. I'm lucky I have been a musician and own a bunch of recording equipment that I'm familiar with. So my main work in getting a podcast going was the RSS feed aspect of it.

## A Podcast is a Feed

Not more and not less... digging into podcasting my primary question was: "How do I get on iTunes?". A few minutes of research taught me, that Podcasts are basically just RSS feeds. And in order to make them work in iTunes you just have to [follow along Apples documentation on Podcasting](//www.apple.com/itunes/podcasts/specs.html).

## The 4 Steps to Podcasting with Jekyll

 1. Record a Podcast
 2. Host your Podcast somewhere
 3. Have Jekyll create a valid Podcast RSS Feed
 4. Submit your Feed Link to iTunes (or elsewhere)

### 1. Recording

Ok, I can't help you much with No. 1 - that's left to you, but once you are ready, here's what's next:

### 2. Hosting

I decided to use [Amazon S3 Storage](https://aws.amazon.com/free/) for my Podcasts. The first year is free and I can use the web interface to upload my files. No cost but also no fancy magic.

**Update:**
If you are just starting out with your podcast you might want to have a look at [FeedPress](https://feed.press/?affid=10971). If you can afford 5$ - 10$ a month and want hosting, newsletter and analytics in one, they might be a solution worth looking at.

### 3. Create a Feed with Jekyll

Ok, so now we need Jekyll to generate a nice and valid podcast feed for us. First we'll add a ``podcast.rss` file to our Jekyll root folder that looks like this:

{% gist 1f7d69ee315c3f8316e2 %}

You should take care, that you provide the necessary info in your `_config.yml`, like so:

{% gist e4382ea47bd00ebac49e %}

Now you only have to add the specific information to the front matter of the article (podcast episode) that you release:

{% gist a48a4b527b3208ec8e9e %}

> For debugging, run `jekyll serve -w` and add `/podcast.rss` to your local url and check if the feed is complete.
You can also use feed validators like [castfeedvalidator](http://castfeedvalidator.com/), to check if your feed got all necessary information.

### 4. Submitting the Feed to iTunes

If everything went well in the steps before you now own a valid RSS feed with you podcast info and are ready to [submit it to iTunes](itmss://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/publishPodcast?ign-mscache=1ign-msr=https%3A%2F%2Fwww.apple.com%2Fitunes%2Fpodcasts%2Fspecs.html).

![The unspectacular iTunes Podcast submission dialogue](/images/podcasting/itunes.jpg)

It's a very unspectacular happening - just fill in the url and if everything is green, you will receive an eMail, that your submission will be reviewed.

In my case it took about 3 days until I received a second Mail, that my podcast was now available on iTunes.

Speaking of which - [check out my podcast here](http://aethermonolog.de) (if you can handle some german language).
