---
layout: post
title:  "Podcast Analytics: FeedPress vs. S3Stat"
excerpt: "I recently dug myself into a new podcasting project. After I got my feed over to iTunes I was quite surprised that there is no official way to get subscriber numbers or any other data insights. Guide me on my journey into finding out how to handle podcast analytics..."
categories: [podcasting, en]
tags: [podcasting, analytics, aws, s3stats, feedpress]
image:
  feature: article-podcasting.jpg
  card: cards/podcasting.jpg
comments: true
share: true
date: 2015-12-25
---

I recently started a [podcasting project](http://aethermonolog.de), where I talk about my approaches and learnings in making music _(it's in german)_.

Getting the podcast going was pretty easy. In short I ended up using a static [Jekyll Website](http://jekyllrb.com) and an additional [Amazon S3 Bucket](http://aws.amazon.com/s3) to store my audio files. After that I submitted my RSS feed to Apple and got on iTunes 3 days later...
So far very easy and since S3 is free of charge for the first year it had cost me 0$ so far.

## Apple: No data for you!

Honestly, I was surprised that there is no way to get data on your podcast from Apple. You can't even see the amount of subscribers you have. Really disappointing!
I'm not a data guy, but I was hoping to at least check out my number of subscribers or plays.

##### TL;DR
> Podcasting on iTunes comes without data. You need to set it up yourself. I found 2 possible candidates: [S3Stat](http://s3stat.com) and [FeedPress](https://feed.press/?affid=10971)

## FeedPress to the rescue?
I searched the web for _podcast analytics_.  I found [FeedPress](https://feed.press/?affid=10971), which looked promising. They offer feed analytics and newsletter for around 4$ a month. An additional 8$ come around when you want your podcasts hosted there. Seems like they set up a feed for you and you need to change things on your current feed (like redirect and such) ...
Mmmpf! After I had set up all my stuff already I was not eager to mess with my running setup. Plus I was looking for something free, since I just started the project and want to keep the cost down until I see where it goes. I clicked the [14 days trial](https://feed.press/?affid=10971). I'll leave it alone for a few days and see what happens.

## In the meantime: S3Stat to the rescue!
Some other results on my search pointed me towards [S3Stat](http://s3stat.com). They offer a [free 30 day trial](https://www.s3stat.com/Setup/Register.aspx) _- they seem to be a bit more generous with their trial time -_ and since my audio is hosted on S3 anyways, it sounded like a perfect match.

### Setting up S3Stat
Setup worked like a charm. They have a 9 Step Tutorial that I was able to work through in about 5 Minutes and got my whole S3 analytics set up. I didn't had to change a bit in my stuff the setup was just access management for S3 to make data readable. That is a plus.

Only downside is in the nature of data itself. Once you are ready you have to wait for data to come in. So I'll get back in a few days and see what they got for me.

### 24 hours later: We got data

That went fast! The first data came in about 24 hours later and is reporting my daily traffic, hits on specific podcast episodes, where the traffic came from (referral links & countries), and even the browsers that where used. The interface is clean makes it easy to scan the data.

Here's an example of [S3Stat](http://s3stat.com) in action:

![](//dyscribe.com/images/images/s3stat-vs-feedpress/s3stat-browsers@2x.jpg)

## 6 days later: FeedPress we need to talk

I really had a hard time figuring out how to get [FeedPress](https://feed.press/?affid=10971) running. After 6 days I finally got it right and decided that my next post will be a tutorial on _"How to set up FeedPress for Jekyll"_. It wasn't even that hard in the end, but the tasks and intended behavior of FeePress where just not clear to me.

Here's an example of [FeedPress](https://feed.press/?affid=10971):

![](//dyscribe.com/images/images/s3stat-vs-feedpress/feedpress-subs@2x.jpg)

## Wrapping up

[FeedPress](https://feed.press/?affid=10971) is a nice approach and the only thing that I found really attractive, is that they showed the actual number of subscribers I have on my Podcast feed. The 14 days trial and a mailing I received made me feel under pressure. Feels like they are a bit stingy and want me to pay fast, but can't really convince on UX and documentation.
FeedPress is dedicated to Podcasters, that is great! But also they offer a lot of "Services" that I find _half baked_. Newsletter and Hosting are nice things, but I like highly specified services better than "all in one" solutions - might just be me  - though I must say that FeedPress offers a connection to Mailchimp. I use Mailchimp as a newsletter system and I appreciated that it is possible.
The biggest downside was the hard time to get it running, caused by the lack of clear tasks and hardly accessible documentation or features. Information that was helpful felt hidden in the depth of the interface.

##### TL;DR;
> [S3Stat](http://s3stat.com) is the better and more advanced data service on S3. If you start from scratch, [FeedPress](https://feed.press/?affid=10971) is worth a look.

After all I decided to stick with [S3Stat](http://s3stat.com). That is firstly because I hate when stuff drains to much time from my schedule. S3Stat was fast and easily setup - that's a big thumbs up. Secondly the amount of overall data insights (like specific number of hits on an episode) is the kind of information I was looking for and can somehow compensate not having the actual subscriber count.
The 30 days trial made me feel like I had enough time for evaluation and not to rush through.
Thirdly I liked the fact that they offer a program for broke bloggers to save a few bucks on their subscription. I liked that!

What do you think? Let me know in the comments!
