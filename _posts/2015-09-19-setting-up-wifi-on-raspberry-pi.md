---
layout: post
title:  "Boot Raspberry Pi into a Browser in Kiosk mode"
excerpt: "Make your Raspberry Pi open a website in a browser in kiosk mode as soon as you switch it on."
categories: raspberrypi, tutorial
tags: [raspberrypi, login, tutorial]
image:
  feature: article-raspberry-pi.jpg
  card:
comments: true
share: true
date: 2015-09-18
---


# Setup Wifi (Manual Configuration from Command Line)

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

Press `CTRL + X` to save. Confirm by typing `Y`. After that you'll be prompted back to the command line.

Now we have referenced a file in the network interface and need to add the Wifi credentials to the  WPA config file. We do this by opening the config file in the nano editor:

`sudo nano /etc/wpa_supplicant/wpa_supplicant.conf`

**The default looked like that to me:**

`ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev update_config=1`

**I added:**

{% highlight bash %}
network={
	ssid="YOURSSID"  # Specify network name (quotes are needed)
	psk="YOURPASSWORD"  # Define your WIFI password (quotes are needed)
	proto=RSN # Protocol type can be: RSN (for WP2) and WPA (for WPA1)
	key_mgmt=WPA-PSK    # Key management type can be: WPA-PSK or WPA-EAP (Pre-Shared or Enterprise)
}
{% endhighlight %}

After you made and saved the changes (remember `CTRL + X` from above) restart your Pi using:

`sudo reboot`

Check if you are connected by using:

`ip addr`

The output will show you if your LAN or Wifi connection is established and has an IP address (something like 192.168.2.136 - the exact number is depending on your specific setup).

Or try if you get a signal using

`ping -c 4 google.com`

This will send 4 packages to the google website and validate if your connection is functional. The output should look similar to this:

{% highlight bash %}
PING google.com (173.194.112.194): 56 data bytes
64 bytes from 173.194.112.194: icmp_seq=0 ttl=54 time=9.485 ms
64 bytes from 173.194.112.194: icmp_seq=1 ttl=54 time=11.724 ms
64 bytes from 173.194.112.194: icmp_seq=2 ttl=54 time=19.041 ms
64 bytes from 173.194.112.194: icmp_seq=3 ttl=54 time=9.934 ms
{% endhighlight %}

If that is the case, you have successfully set up the wifi connection for you _Raspi_.


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

Fill in the matching data for your network and ensure that your router or firewall are letting the Pi communicate with a static IP. How to do this is highly depended on your individual setup, so I can't provide a default for this within this tutorial.