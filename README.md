# dyscribe.com blog

[![Build Status](https://travis-ci.org/dyscribe/dyscribe_blog.svg?branch=master)](https://travis-ci.org/dyscribe/dyscribe_blog/)

[![Stories in Ready](https://badge.waffle.io/dyscribe/dyscribe_blog.png?label=ready&title=Ready)](https://waffle.io/dyscribe/dyscribe_blog)


This is the public repo of my blog, available at [dyscribe.com](https://dyscribe.com).

It contains a responsive [Jekyll](http://jekyllrb.com/) template, built upon the [So Simple Theme](https://github.com/mmistakes/so-simple-theme) by [Michael Rose](https://github.com/mmistakes).
It includes all assets and articles you find on the website.

## Disclaimer / Notes

> As this is my digital playground, this template has been strongly modified and crafted by best means and understanding.
It was not intended or built to be easily customizable for other purposes or projects in the first place _(however: feel free to do so anyways)_.
If you are looking for a clean and customizable Jekyll Template, you might be better of with the [original version of this template](https://github.com/mmistakes/so-simple-theme).

## Development

I have updated to local development workflow as follows:

 * `gulp.js` task runner to build and rebuild the site
 * `*.sass` instead of `*.scss` (in order to avoid `{}` and `;` usage)
 * `.editorconfig` to turn tabs to 2 spaces and control whitespace and new-line
 * `browser-watch` to refresh changes instantly in the browser
 * `travis CI` for testing if the jekyll build step passes on pull requests

For local development make sure you have set up the localhost URL prepared in `_config.yml` instead of the websites live url. Then open a terminal and type

`gulp`

everything should be running automatically from there.

## Collaboration

Collaboration is appreciated.
If you find bugs in the code, misspellings in articles, or security issues, feel free to open up a pull request.
