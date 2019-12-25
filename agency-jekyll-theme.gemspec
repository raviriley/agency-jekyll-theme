# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-agency"
  spec.version       = "1.0.0"
  spec.authors       = ["Ravi Riley"]
  spec.email         = ["raviriley@gmail.com"]

  spec.summary       = "Bootstrap Agency ported to Jekyll. Added lots of new features: Markdown support, custom pages, Google Analytics, customizable styling, and more! This theme is the most up-to-date out of all the gems and repos on GitHub."
  spec.homepage      = "https://github.com/raviriley"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|_data|assets)/|(LICENSE|README|index|404|legal)((\.(txt|md|markdown|html)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
