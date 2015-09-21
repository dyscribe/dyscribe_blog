---
layout: post
title:  "Setup a Dashing Dashboard on Raspberry Pi from Scratch"
excerpt: "A beginner tutorial and guide on setting up a dashing dashboard on a raspberry pi, starting completly from scratch."
categories: raspberrypi, tutorial
tags: [dashing, raspberrypi, tutorial]
image:
  feature: article-raspberry-pi.jpg
  card: 
comments: true
share: true
date: 2014-10-31
---

# Setup a Dashing Dashboard on Raspberry Pi (Model B) from Scratch

You will need the following hardware components:

 * Raspberry Pi (Model B)
 * Power Source (via USB or separate)
 * 8GB SD Card (less might work, but space is good to have)
 * Random Monitor to plug into the Raspberrys HDMI port
 * USB Keyboard
 * USB Wifi stick (or ethernet cable)

## 1. Installing Raspbian to the SD Card

The foundation for this step was taken from [the official raspberry pi documentation](//www.raspberrypi.org/documentation/installation/installing-images/mac.md).

Open a shell and show list of available disks (after inserting SD card into your Macs SD card slot):

`diskutil list`

You'll see the list of devices displayed. I identified my SD card basically by looking at the size of the filesystem.
Then unmount the disk to prepare it for an installation using:

`diskutil unmountDisk /dev/diskX`

Where `X` needs to be replaced by the number of the disk you want to install it on.

Clone Image to SD card:

`sudo dd bs=1m if=/path/to/image.img of=/dev/diskX`

The installation takes a while and does not show any progress. This is normal. It will notify on command line when it's done.


## 2.Boot and Setup Wifi (Manual Configuration from Command Line)

Foundation for this step has been taken from [a tutorial found on howtogeek](//www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/).

 * Boot Raspberry Pi
 * ***Optional:** Change user password*
 * Default user is `pi`
 * Default password is `raspberry`
 * Open the configuration in nano editor
 `sudo nano /etc/network/interfaces`

**The default looked like that to me:**

{% highlight bash %}
auto lo

iface lo inet loopback
iface eth0 inet dhcp

allow-hotplug wlan0
iface wlan0 inet manual
wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp
{% endhighlight %}

**I changed it to:**

{% highlight bash %}
auto lo

iface lo inet loopback
iface eth0 inet dhcp

allow-hotplug wlan0
iface wlan0 inet dhcp
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp
{% endhighlight %}

Press `CTRL` + `X` to save. Confirm by typing `Y`. After that you'll be prompted back to the command line.

Now change the WPA config by opening it in nano:

`sudo nano /etc/wpa_supplicant/wpa_supplicant.conf`

**The default looked like that to me:**

`
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
`

**I added:**

{% highlight bash %}
network={
ssid="YOURSSID"     # Specify network name (quotes are needed)
psk="YOURPASSWORD"  # Define your WIFI password (quotes are needed)
proto=RSN           # Protocol type can be: RSN (for WP2) and WPA (for WPA1)
key_mgmt=WPA-PSK    # Key management type can be: WPA-PSK or WPA-EAP (Pre-Shared or Enterprise)
}
{% endhighlight %}

After you made and saved the changes (remember `CTRL` + `X` from above) restart your Pi using:

`sudo reboot`

Check if you are connected by using:

`ip addr`

Or try if you get a signal using

`ping google.com`

Once you have a function connection run the following two commands to bring your Raspberry to the lastest versions of things:

`
sudo apt-get update
sudo apt-get upgrade
`


### *Optional: Set up a static IP adress (recommended for SSH access)*

Considering the Pi being a dashboard an therefore stuck somewhere behind a monitor you want to have a static IP set up for smoother SSH access. However this is optional and SSH connection can also be done with a dynamic IP.

Rerun  `sudo nano /etc/network/interfaces` and add:

{% highlight bash %}
iface wlan0 inet static # change dhcp to static and add your credentials
address 192.168.1.XXX
netmask 255.255.255.0  
network 192.168.0.0
broadcast 192.168.1.255
gateway 192.168.1.XXX
{% endhighlight %}

## 3. Installing Dependencies for Dashing

To install Dashing as a ruby gem perfom the following installations:

* LibSSL Dev `sudo apt-get install libssl-dev`
* Ruby `sudo apt-get install ruby-dev`
* NodeJS `sudo apt-get install nodejs`
* Bundler `sudo apt-get install bundler`
* Rubygems `sudo apt-get install rubygems`
* Dashing `sudo gem install dashing`*

> *Be aware that the last command first seems infunctional. Even if nothing happens just wait and let the Raspberry work. After about 10 minutes you will see some installation output on the commandline.


After this you should be finally good to go.



## 4. Install Chromium Browser

Next up you need a browser and a server for the localhost in order to display the dashboard. I chose Chromium as a browser together with unclutter to hide the mouse cursor, and X11VNC as a XServer. To install these all in one run:

`sudo apt-get install unclutter x11vnc chromium-browser`


## 5. Setup Your First Dashing Project

To initialize your first project do:

{% highlight bash %}
sudo dashing new dashboard_project
cd dashboard_project
sudo bundle
dashing start
{% endhighlight %}

The dashboard is now available under `localhost:3030`


## 6. Run Your Dashboard on Screen

I only got this step working when connected via SSH in order to have mutliple shells opened. From your remote shell perform these three steps after each other:

`startx &`

`export DISPLAY=:0.0`

`chromium-browser --kiosk --ignore-certificate-errors --disable-sync
--disable-restore-session-state //localhost:3030`

Now the sample.erb dashboard should be loaded in a headless chromium on your screen.

Congrats! You're running dashing!


---


#### Ressources:

It took me a while to trial and error through different tutorials. Here is a bunch of links I came accross when working on this project. You might find some of these helpful, if the above does not work for you...

**Wifi Setup**

* [howtogeek tutorial](//www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/)
* [raspify tutorial](//www.raspyfi.com/wi-fi-on-raspberry-pi-a-simple-guide/)
* [maketecheasier tutorial](//www.maketecheasier.com/setup-wifi-on-raspberry-pi/)
* [suntimebox article](//www.suntimebox.com/raspberry-pi-tutorial-course/week-3/day2-1-wireless-network-setup/)

**Dashing & Dependency Installation**

 * [stackexchange: apt get](//raspberrypi.stackexchange.com/questions/9307/apt-get-installation-doesnt-work-on-raspberry-pi)
 * [raspberrypi.org ruby documentation](//www.raspberrypi.org/documentation/linux/software/ruby.md)
 * [tutplus.com ruby installation](//computers.tutsplus.com/tutorials/how-to-install-ruby-on-rails-on-raspberry-pi--cms-21421)
 * [Official Dashing Website](//dashing.io/)
 * [gist on dashing setup ](https://gist.github.com/stonehippo/5896381)
 * [rbenv installtion](https://github.com/sstephenson/rbenv)
 * [gocardless.com on rpi dashboard](https://gocardless.com/blog/raspberry-pi-metric-dashboards/)
 * [spech.de on rpi dashboard](//www.spech.de/blog/article/dashboard)
