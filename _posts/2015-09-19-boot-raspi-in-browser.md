---
layout: post
title:  "Open a website in fullscreen on a Raspberr Pi"
excerpt: "This tutorial will show you how to automatically open a website in a fullscreen browser on a Raspberry Pi once you turn it on. We will configure the Pi so that it runs a script by itself, once you switch it on and then opens a website of your choice in a kiosk mode browser."
categories: raspberrypi
tags: [raspberrypi, login, tutorial]
image:
  feature: article-raspberry-pi-dashboard.jpg
  card: cards/raspberry-dashboard.jpg
comments: true
share: true
date: 2015-09-18
---

> It took me a while to find something that works easily and with no hassle. This is by far the easiest way I could find. If you have questions or ideas for improvement, let me know.

Check out [my other Raspi tutorials here](//dyscribe.com/tags/#raspberrypi) if you need help with other topics like setting up Wifi, SSH connection or to remove the login procedure from your Pi.
If you already got these things figured out, here we go with the actual Tutorial:

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
/usr/bin/midori -e Fullscreen -a http://dyscribe.com
done
{% endhighlight %}

Close the edited file by hitting `ctrl - X` and save your changes by pressing `y` and `enter`.
We now have a script that will open a _Midori_ browser with the given url for us. Remember to customize the url in the code snippet (`http://dyscribe.com`) with the actual website you want to open in the browser, otherwise it will open this website here.

To make our dashboard script an executable file (that we will run automatically during the next step) we type first change the chmod settings:

`sudo chmod 755 dashboard.sh`

Now we will see if it works by running the script manually:

`xinit /home/pi/dashboard.sh`

To exit press `ctrl + alt + F1` and then `ctrl + c`

## Opening a website automatically on boot

Now we only need to add the following lines to the `/home/pi/.profile` file. We open it using
`sudo nano /home/pi/.profile` and add this to the bottom of the file after the existing content:

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

This code will check if the Pi has a working internet connection and then open up the dashboard. Or display the error message, typed below, if no connection is available.

Now save these changes (again by pressing `ctrl + X` and confirming with `y`) and reboot your _Raspi_ by typing `sudo reboot`.

It should now restart opening the website you have defined in the script. You made it!
