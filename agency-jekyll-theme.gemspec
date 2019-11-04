# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "agency-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Ravi Riley"]
  spec.email         = ["raviriley@gmail.com"]

  spec.summary       = "Agency Bootstrap theme converted to a Gem-based Jekyll theme. This is the most recent and up-to-date Agency Jekyll theme."
  spec.homepage      = "https://github.com/raviriley"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_includes|_layouts|_sass|_data)/|(LICENSE|README)((\.(txt|md|markdown)|$))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
