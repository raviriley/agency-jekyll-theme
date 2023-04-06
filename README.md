# Agency Jekyll Theme
[![RubyGems Downloads](https://img.shields.io/gem/dt/jekyll-agency?label=gem%20downloads)](https://rubygems.org/gems/jekyll-agency)
[![LICENSE](https://img.shields.io/badge/license-MIT-blue)](/LICENSE.txt)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip_me-green?logo=paypal)](https://www.paypal.me/raviriley)
[![template button](https://img.shields.io/badge/Generate_theme_from_template-2ea44f)][generate]
[![Featured on Jekyll-Themes.com](https://img.shields.io/badge/featured%20on-JekyllThemes-red.svg)](https://jekyll-themes.com/agency-jekyll-theme/)

## Preview - click for live demo

[![screenshot](/screenshot.PNG)][demo-page]

## Warning

> :warning: **Notice for those using legacy Formspree contact forms:** :warning:
>
> Email-based forms are being [phased out](https://help.formspree.io/hc/en-us/articles/360056076314) by Formspree. [#11](https://github.com/raviriley/agency-jekyll-theme/pull/11) updated this theme to use the [new Formspree structure](https://help.formspree.io/hc/en-us/articles/360017735154-How-to-prevent-spam). Click [here](https://help.formspree.io/hc/en-us/articles/360056076314) for instructions on updating your site's form.

## About

This is the [Agency Bootstrap theme](https://startbootstrap.com/themes/agency/), converted to a gem-based Jekyll theme with GitHub Pages support.

While this has been done before, [here](https://github.com/y7kim/agency-jekyll-theme), [here](https://github.com/SotiriosVrachas/jekyll-theme-startbootstrap-agency), and [here](https://github.com/laklau/agency-jekyll-theme/), these are outdated and have not been updated or maintained for years. I built this theme from the most recent Bootstrap source.

I also added a lot of new features that go beyond the original theme's capabilities:

- GitHub Pages support
- [template repo][template] to get up and running in minutes
- contact form functionality powered by [Formspree.io](https://formspree.io)
- multiple language support (currently English, Spanish, & German)
- custom pages
- 404 page
- legal/Privacy Policy page
- Google Analytics support
- Markdown support
- custom images
- logo support (instead of just title text)
- automatically updating copyright years
- custom navigation bar, even without the header image(s)
- customizable footer
- custom accent color and dark/light colors
- horizontal scrolling support for client section
<!--
- custom colors with automatic gradient generation (coming soon)
- site title logo text font customization (coming soon)
- horizontal scrolling support for portfolio section (coming soon)
- about section (different from the timeline) -->

The Jekyll structure of this theme includes:

- `_portfolio` files - what generate the portfolio grid. YAML front matter handles all the details
- the `page` layout allows custom pages, as seen in the legal and 404 pages
- `sitetext.yml` enables complete customization of all site text
- `navigation.yml` enables fully customizable navigation
- `style.yml` enables fully customizable colors, background images, and other style-related things

**If you enjoy this theme, please consider [supporting me](https://www.paypal.me/raviriley) to continue developing and maintaining it.**

<div align="center">

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/raviriley)

</div>

## Installation

There are three ways to install this theme:

1. As a gem-based theme
2. Use the [starter template][template] (best for GitHub Pages)
3. As a remote theme

#### 1. Gem-based Theme Installation

Replace the contents of your `_config.yml` file with the sample [\_config.yml](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme/master/_config.yml).

Install the gem with:

```sh
$ bundle add jekyll-agency
```

Or manually.

1. Add this line to your Jekyll site's `Gemfile`:
   ```ruby
   gem "jekyll-agency"
   ```
2. Then execute:
   ```sh
   $ bundle install
   ```

#### 2. Using the [Starter Template][template]

This is the fastest and easiest way to get up and running on GitHub Pages.

Simply generate your own repository by clicking the button below. Then replace the sample content with your own and configure for your needs.

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)][generate]

</div>
    
#### 3. Remote Theme Installation

Replace your `_config.yml` file with the starter [\_config.yml](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme-starter/master/_config.yml).

Replace your `Gemfile` with the starter [Gemfile](https://raw.githubusercontent.com/raviriley/agency-jekyll-theme-starter/master/Gemfile).

Then install gems.

```sh
$ bundle install
```

<!--
## Documentation and Usage

**TODO:** Write usage instructions here. Describe available layouts, includes, or assets.

navheader is used only for the home page. nav is used everywhere else.

Layouts:

Includes:

-->

## Contributing

This project is intended to be a welcoming space for collaboration. If you have an idea, suggestion, feature request, etc., feel free to open an issue or pull request.

For bug reports, follow the provided template.

#### Improvements - Up for Grabs

- [x] multiple language support thanks to [@rbenitezpagan](https://github.com/rbenitezpagan)
  - [x] Spanish thanks to [@rbenitezpagan](https://github.com/rbenitezpagan)
  - [x] German thanks to [@bkfirmen](https://github.com/bkfirmen)
  - [ ] Chinese
  - [ ] Arabic
  - [ ] etc
- [ ] customizable background coloring for each section

## Development

To set up your environment to develop this theme, clone this repo or your fork.

```sh
$ git clone https://github.com/raviriley/agency-jekyll-theme.git
$ cd agency-jekyll-theme
```

Then run:

```sh
$ bundle install
```

To test the theme, run this. (Using the `--trace` flag for verbose errors.)

```sh
$ bundle exec jekyll serve --trace
```

Then open your browser at:

- http://localhost:4000

Add pages, documents, data, etc. like normal to test the theme's contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

<!--

## Example Implementations

- [CV Enterprises](https://cventerprises.org)
- [Mortazavi Lab at UC Irvine](https://mortazavilab.github.io/)

-->

[demo-page]: https://raviriley.github.io/agency-jekyll-theme-starter/
[template]: https://github.com/raviriley/agency-jekyll-theme-starter
[generate]: https://github.com/raviriley/agency-jekyll-theme-starter/generate
