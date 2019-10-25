+++
# Tag Cloud widget.
widget = "tag_cloud"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = false  # Activate this widget? true/false
weight = 150  # Order that this section will appear.

title = ""
subtitle = ""

[content]
  # Choose the taxonomy from `config.toml` to display (e.g. tags, categories)
  taxonomy = "tags"
  
  # Choose how many tags you would like to display (0 = all tags)
  count = 20

[design]
  # Minimum and maximum font sizes (1.0 = 100%).
  font_size_min = 1.0
  font_size_max = 1.5
  
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DeepSkyBlue"
  # gradient_end = "SkyBlue"
  
  # Background image.
  image = "headers/bubbles-wide.jpg"  # Name of image in `static/img/`.
  image_darken = 0  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  text_color_light = false

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["20px", "0", "20px", "0"]

+++
