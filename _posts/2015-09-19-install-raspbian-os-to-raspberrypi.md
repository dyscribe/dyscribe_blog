---
layout: post
title:  "Installing Raspbian OS on a Raspberry Pi"
excerpt: "A beginners tutorial and guide on how to install the Raspbian operating system from scratch."
categories: raspberrypi tutorial
tags: [raspberrypi, raspbian, tutorial]
image:
  feature: article-raspberry-pi-setup.jpg
  card: cards/raspberry-setup.jpg
comments: true
share: true
date: 2015-09-18
---

# Installing Raspbian OS on a Raspberry Pi

The foundation for this step was taken from [the official raspberry pi documentation](//www.raspberrypi.org/documentation/installation/installing-images/mac.md).

Since we are just starting the _"Raspi"_ we need another computer to initially set up the SD card. For this tutorial I used a Macbook Pro with integrated SD card slot. First [download the Rasbian Image here...](https://www.raspberrypi.org/downloads/raspbian/)
After completion extract the downloaded `.zip` file.

> Tip: You need to enter the path to this file later, so if it easier for you, consider putting it on the desktop or somewhere easy to find afterwards.

Now insert your SD into the card slot. Open a shell _(= terminal app)_ and show the list of available disks by entering:

`diskutil list`

You'll see the list of devices. I have identified my SD card basically by looking at the size of the filesystem. In my case it was 8 GB, so I checked for disks with a total size of _7.something_.
Unmount the disk to prepare it for an installation using:

`diskutil unmountDisk /dev/diskX`

Where `X` needs to be replaced by the number of the disk you want to install it on.

Clone the Image to the SD card:

`sudo dd bs=1m if=/path/to/image.img of=/dev/diskX`

Again `X` has to be same number of the disk you unmounted. The installation takes a while and does not show any progress. This is normal. It will notify on command line when it's done.

Once you see an Output like
```
	3125+0 records in
	3125+0 records out
	3276800000 bytes transferred in 1913.995733 secs (1712021 bytes/sec)
```
you are done. Remove the SD card, but it into your _Raspi_ and fire it up.
