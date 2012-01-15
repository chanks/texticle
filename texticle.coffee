window.Texticle = {}

Texticle.parse_line = (input) ->
  input.replace /\.\.\./g, "&#8230;"

Texticle.parse = (input) ->
  output = ""

  in_paragraph = false

  lines = input.split "\n"

  for line, index in lines
    next_line = lines[index + 1]

    # Skip empty lines.
    continue unless line.match(/\S/)

    # Start a paragraph unless we're already in one.
    unless in_paragraph
      output += "<p>"
      in_paragraph = true

    # Actually write the line.
    output += Texticle.parse_line(line)

    # If the next line isn't empty, it's a line break.
    if next_line and next_line.match(/\S/)
      output += "<br />\n"
    else
      # If there isn't a next line, or if the next line is empty, leave the paragraph.
      output += "</p>\n"
      in_paragraph = false

  # Trim trailing whitespace.
  output.replace /\s$/, ""
