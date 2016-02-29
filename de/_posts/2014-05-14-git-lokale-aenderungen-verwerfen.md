---
layout: post
title:  "Git: Lokale Änderungen verwerfen und Repository zurücksetzen"
excerpt: "Wie man alle Änderungen in einem Git Repo verwirft, und und es in seinen Ausgangszustand zurücksetzt."
categories: [de]
tags: [git, versionierung ]
image:
  feature: article-github.jpg
  card: cards/github.jpg
comments: true
share: true
date: 2014-05-13
---

Es kommt gelegentlich vor, das lokale Änderungen nicht so laufen wie geplant, und man den letzten funktionierenden Arbeitsstand eines Git Repos wiederherstellen möchte. Der Weg dahin ist sehr einfach...

## Git Repo zurücksetzen

{% highlight bash %}
git fetch --all
git reset --hard origin/master
{% endhighlight bash %}

## Erklärung
Mit `git fetch` werden zunächst die verfügbaren Dateien aus dem remote repository geladen.
Der Befehl `git reset` sorgt dann dafür, dass der master branch mit den "gefechten" Dateien wiederhergestellt wird. Die Option `--hard origin/master` sorgt dafür, dass lokal geänderte Dateien überschrieben werden - Lokale Änderungen sind damit auch anschließend verloren.

So oder so sind alle "commits" die noch nicht "gepusht" wurden, nach einem git reset verloren, aber das Repo befindet sich jetzt wieder im Ausgangszustand.
