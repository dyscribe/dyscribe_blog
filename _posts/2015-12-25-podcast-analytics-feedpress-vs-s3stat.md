---
layout: post
title:  "Podcast Analytics: FeedPress vs. S3Stat"
excerpt: "I recently dug myself into a new podcasting project. After I got my feed over to iTunes I was quite surprised that there is no official way to get subscriber numbers or any other data insights. Guide me on my journey into finding out how to handle podcast analytics..."
categories: podcasting
tags: [podcasting, analytics, aws, s3stats, feedpress]
image:
  feature: article-podcasting.jpg
  card: cards/podcasting.jpg
comments: true
share: true
date: 2015-12-25
---

I recently started a [podcasting project](http://aethermonolog.de), where I talk about my approaches and learnings in making music _(it's in german though)_.

Getting the podcast going was pretty easy. In short I ended up using a static [Jekyll Website](http://jekyllrb.com) and an additional [Amazon S3 Bucket](http://aws.amazon.com) to store my audio files. After that I submitted my RSS feed to Apple and got on iTunes 3 days later...
So far very easy and since S3 is free of charge for the first year it had cost me 0$ so far.

## Apple: Why U No Data-Insights?

Honestly, I was surprised that there seems to be no way to get data insights on your podcast from Apple. You can't even see the amount of subscribers you have. Really disappointing :(
I'm not a data guy, but I was hoping to at least check out my number of subscribers.

## FeedPress to the rescue?
Still tears in my eyes,  I searched the web for _podcast analytics_.  I found [FeedPress](https://feed.press/?affid=10971), which looked promising. They offer feed analytics and newsletter in one for around 4$ a month. An additional 8$ come around when you want your podcasts hosted there. Seems like they set up a feed for you and you need to change things on your current feed (like redirect and such) ...
Mmmpf! After I had set up all my stuff already I was not eager to turn my whole setup upside down again. Plus I was looking for something free, since I just started the project and want to keep the cost close to zero until I see where it goes. So I clicked the [14 days trial](https://feed.press/?affid=10971). I'll leave it alone for a few days and see what happens.

## In the meantime: S3Stat to the rescue!
Some other results on my _podcast analytics_ search pointed me towards [S3Stat](http://s3stat.com). They offer a [free 30 day trial](https://www.s3stat.com/Setup/Register.aspx) _- they seem to be a bit more generous with their trial time -_ and since my audio is hosted on S3 anyways, I gave it shot...

### Setting up S3Stat
Setup worked like a charm. The have a 9 Step Tutorial that I was able to work through in about 5 Minutes and got my whole S3 analytics set up. I didn't had to change a bit in my stuff the setup was just access management for the data to get from amazon to s3stat. So that is a plus.

Only downside is in the nature of data itself. Once you are ready you have to wait for data to come in. So also in here: Get back in a few days and see what they got for me.


... this article will be continued in a few days ...
