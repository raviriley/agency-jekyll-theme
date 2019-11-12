[Creating Gem Based Themes For Jekyll](https://www.chrisanthropic.com/blog/2016/creating-gem-based-themes-for-jekyll/)

# [Agency Jekyll Theme](https://raviriley.github.io/agency-jekyll-theme) - incomplete

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/raviriley/agency-jekyll-theme/blob/master/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/raviriley)

This is the [Agency Bootstrap theme](https://startbootstrap.com/themes/agency/) converted to a gem-based Jekyll theme. While this had been done before, ([here](https://github.com/y7kim/agency-jekyll-theme) and [here](https://github.com/SotiriosVrachas/jekyll-theme-startbootstrap-agency)), both of these are outdated and have not been updated or maintained for years. I built this theme from the most recent Bootstrap source. I also added a lot of new features that go beyond the original theme's capabilities:

- custom pages
- 404 page
- legal/Privacy Policy page
- Google Analytics
- Markdown support
- custom colors
- logo support (instead of just text)
- automatically updating copyright years
- custom navigation bar, even without the header images
- about section (not the timeline)
- portfolio carousel (coming soon)
- custom colors with automatic gradient generation (coming soon)
- site title logo text font customization (coming soon)


**If you enjoy this theme, please consider [supporting me](https://www.paypal.me/raviriley) to continue developing and maintaining it.**

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/raviriley)

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "agency-jekyll-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: agency-jekyll-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install agency-jekyll-theme

Then, replace the contents of your `_config.yml` file with [this](https://github.com/raviriley/agency-jekyll-theme/blob/master/_config.yml).

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

navheader is used only for the home page. nav is used everywhere else. -maybe incorporate navheader into home layout and nav into page layout?

## Contributing

This project is intended to be a welcoming space for collaboration. If you have an idea, suggestion, feature request, etc., feel free to open an issue or pull request.
For bug reports, follow the provided template.

#### Improvements - Up for Grabs

- multiple language support
- custom background images

## Development

To set up your environment to develop this theme, clone this repo, then run `bundle install`.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

#### theme stuff

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `agency-jekyll-theme.gemspec` accordingly.

## Sources
I referenced the two old repos and some of their respective PRs.

[@y7kim](https://github.com/y7kim)'s [old Agency Jekyll theme](https://github.com/y7kim/agency-jekyll-theme)

Some of [@amon-ra](https://github.com/amon-ra)'s [pull request](https://github.com/y7kim/agency-jekyll-theme/pull/38)

[](https://github.com/SotiriosVrachas/jekyll-theme-startbootstrap-agency/pull/5)

[@Muttmatt](https://github.com/Mutmatt)'s [Google Analytics suggestion](https://github.com/SotiriosVrachas/jekyll-theme-startbootstrap-agency/pull/9)
