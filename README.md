# [Agency Jekyll Theme](https://raviriley.github.io/agency-jekyll-theme)

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme/master/LICENSE)
<!--
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/raviriley)

This is the [Agency Bootstrap theme](https://startbootstrap.com/themes/agency/) converted to a gem-based Jekyll theme.

**If you enjoy this theme, please consider [supporting me](https://www.paypal.me/raviriley) to continue developing and maintaining it.**

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/raviriley)
-->

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

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `agency-jekyll-theme.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
