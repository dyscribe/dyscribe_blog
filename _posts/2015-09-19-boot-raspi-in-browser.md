---
layout: post
title:  "Boot Raspberry Pi into a Browser in Kiosk mode"
excerpt: "Make your Raspberry Pi open a website in a browser in kiosk mode as soon as you switch it on."
categories: raspberrypi tutorial
tags: [raspberrypi, login, tutorial]
image:
  feature: article-raspberry-pi-dashboard.jpg
  card: cards/raspberry-dashboard.jpg
comments: true
share: true
date: 2015-09-18
---

# Boot Raspberry Pi into a Browser in Kiosk mode

> It took me a while to find something that works easily and with no hassle. This is by far the easiest way I could find. If you have questions or ideas for improvement, let me know.

If you need some help in setting Wifi, SSH or other useful things, check out [my other Raspi tutorials here.]()//dyscribe.com/tags/#raspberrypi). If you already got these things figured out, here we go with the actual Tutorial:

## Installing dependencies

We will have to install some tools to make our kiosk browser work:

`sudo apt-get install matchbox x11-xserver-utils unclutter midori`

After the installation we need to create a script file:

`sudo nano dashboard.sh`

This will create and open a file called `dashboard.sh` in the nano editor. We will add the following lines to this yet empty file:

{% highlight bash %}
#!/bin/sh
unclutter &
matchbox-window-manager & :
xset -dpms
xset s off
while true; do
/usr/bin/midori -e Fullscreen -a http://website-to-open.com
done
{% endhighlight %}

Close the edited file by hitting `ctrl - X` and save your changes by pressing `y` and `enter`.
We now have a script that will open a _Midori_ browser with the given url for us. To make it an executable file (that we will automatically run later on) we type:

`sudo chmod 755 dashboard.sh`

Now we will see if it works by running the script manually:

`xinit /home/pi/dashboard.sh`

To exit press `ctrl + alt + F1` and then `ctrl + c`

## Open the website on boot automatically

Now we only need to add the following to the `/home/pi/.profile` file. We open it using `sudo nano /home/pi/.profile` and add this to the bottom of the file after the existing content:

{% highlight bash %}
#!/bin/bash
ifconfig | grep 192
if [ $? -eq 0 ]
then
xinit /home/pi/dashboard.sh
else
echo "Network connection could not be established."
echo "Resolve the connection problems and manually "
echo "execute xinit /home/pi/dashboard.sh to open the website"
fi
{% endhighlight %}
