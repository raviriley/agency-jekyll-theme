<!--[Creating Gem Based Themes For Jekyll](https://www.chrisanthropic.com/blog/2016/creating-gem-based-themes-for-jekyll/)-->

# [Agency Jekyll Theme](https://raviriley.github.io/agency-jekyll-theme) - Work in Progress

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/raviriley/agency-jekyll-theme/blob/master/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/raviriley)
[![RubyGems Downloads](https://img.shields.io/gem/dt/jekyll-agency.svg)](https://rubygems.org/gems/jekyll-agency)


This is the [Agency Bootstrap theme](https://startbootstrap.com/themes/agency/) converted to a gem-based Jekyll theme. While this had been done before, ([here](https://github.com/y7kim/agency-jekyll-theme), [here](https://github.com/SotiriosVrachas/jekyll-theme-startbootstrap-agency), and [here](https://github.com/laklau/agency-jekyll-theme/)), these are outdated and have not been updated or maintained for years. I built this theme from the most recent Bootstrap source. I also added a lot of new features that go beyond the original theme's capabilities:

- contact form functionality powered by [Formspree.io](https://formspree.io)
- custom pages
- 404 page
- legal/Privacy Policy page
- Google Analytics support
- Markdown support
- custom images
- logo support (instead of just text)
- automatically updating copyright years
- custom navigation bar, even without the header image(s)
- about section (different from the timeline)
- custom footer
<!-- - portfolio carousel (coming soon) -->
- custom colors with automatic gradient generation (coming soon)
- site title logo text font customization (coming soon)

The Jekyll structure of this theme includes:

- `_portfolio` files - what generate the portfolio grid. YAML front matter handles all the details
- the `page` layout allows custom pages, as seen in the legal and 404 pages
- `sitetext.yml` enables complete customization of all site text
- `nav.yml` enables fully customizable navigation
- `style.yml` enables fully customizable colors and background images


**If you enjoy this theme, please consider [supporting me](https://www.paypal.me/raviriley) to continue developing and maintaining it.**

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/raviriley)

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-agency"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-agency
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-agency

Then, replace the contents of your `_config.yml` file with [this](https://github.com/raviriley/agency-jekyll-theme/blob/master/_config.yml).

## Usage

<!--TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.-->

navheader is used only for the home page. nav is used everywhere else.

## Contributing

This project is intended to be a welcoming space for collaboration. If you have an idea, suggestion, feature request, etc., feel free to open an issue or pull request.
For bug reports, follow the provided template.

#### Improvements - Up for Grabs

- multiple language support
- custom background images

## Development

To set up your environment to develop this theme, clone this repo, then run `bundle install`. To test the theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. Add pages, documents, data, etc. like normal to test the theme's contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
