---
layout: post
title:  "Boot up Raspberry Pi without login and password"
excerpt: "Learn how to let your Raspberry Pi boot without being prompted for username and password in 6 easy steps."
categories: raspberrypi tutorial
tags: [raspberrypi, login, tutorial]
image:
  feature: article-raspberry-pi-setup.jpg
  card:
comments: true
share: true
date: 2015-09-18
---
# Boot a Raspberry Pi without entering login and password

If you, like me, want to connect the _Raspi_ to a screen without having a keyboard you probably want to remove the password protection.
To do that, we only need to change a single line in the file `/etc/inittab`.

## Changes step by step

1. Enter `sudo nano /etc/inittab`. This will open up the files content in the nano editor.
2. Scroll down (using cursor arrows) until you see this line: `1:2345:respawn:/sbin/getty --noclear 38400 tty1`
3. Add a `#` before this line to uncomment is and a new line below, containing: `1:2345:respawn:/bin/login -f pi tty1 /dev/tty1 2>&1`
4. Hit `ctrl + O` confirm to save the changes by hitting `enter`
5. Hit `ctrl + X` to close the nano editor
6. Type `sudo reboot`

Your _Raspi_ should now boot without prompting you for a password, if so, **Congratulations!** you are done!
