window.Texticle = {}

Texticle.parse_line = (input) ->
  input = input.replace /\.\.\./g,                "&#8230;"
  input = input.replace /--/g,                    "&#8212;"
  input = input.replace /\s-\s/g,                 " &#8211; "
  input = input.replace /\(C\)/g,                 "&#169;"
  input = input.replace /\(R\)/g,                 "&#174;"
  input = input.replace /\(TM\)/g,                "&#8482;"
  input = input.replace /([\d\s'"])x(?=[\d\s])/g, "$1#215;"
  input = input.replace /'/g,                     "&#8217;"
  input = input.replace /\s"/g,                   " &#8220;"
  input = input.replace /"\s/g,                   "&#8221; "

  input = input.replace /\*\*(.+)\*\*/g,     "<b>$1</b>"
  input = input.replace /__(.+)__/g,         "<i>$1</i>"
  input = input.replace /\*(.+)\*/g,         "<strong>$1</strong>"
  input = input.replace /_(.+)_/g,           "<em>$1</em>"
  input = input.replace /\^(.+)\^/g,         "<sup>$1</sup>"
  input = input.replace /~(.+)~/g,           "<sub>$1</sub>"
  input = input.replace /@(.+)@/g,           "<code>$1</code>"
  input = input.replace /([A-Z]+)\((.+)\)/g, "<acronym title=\"$2\">$1</acronym>"
  input = input.replace /\?\?(.+)\?\?/g,     "<cite>$1</cite>"
  input = input.replace /\s\+(.+)\+/g,       " <ins>$1</ins>"
  input = input.replace /\s\-(.+)\-/g,       " <del>$1</del>"

Texticle.parse = (input) ->
  output = ""

  in_paragraph = false

  lines = input.split "\n"

  for line, index in lines
    next_line = lines[index + 1]

    # Skip empty lines.
    continue unless line.match(/\S/)

    if line.match(/^[*\-_\s]{3,}$/)
      output += "<hr />\n"
      continue

    # Check for heading.
    if heading = /^h(\d)\.\s*(.*)/.exec line
      output += "<h#{heading[1]}>#{heading[2]}</h#{heading[1]}>\n"
      continue

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
