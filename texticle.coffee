window.Texticle = {}

entities =
  "\\.\\.\\."     : "&#8230;"
  "--"            : "&#8212;"
  "\\([Cc]\\)"    : "&#169;"
  "\\([Rr]\\)"    : "&#174;"
  "\\((TM|tm)\\)" : "&#8482;"
  "'"             : "&#8217;"
  "(^|\\s)\""     : "$1&#8220;"
  "\"(\\s|$)"     : "&#8221;$1"

tags =
  "\\*\\*" : 'b'
  "__"     : 'i'
  "\\*"    : 'strong'
  "_"      : 'em'
  "@"      : 'code'
  "\\?\\?" : 'cite'
  "\\+"    : 'ins'
  "\\-"    : 'del'

entity_regexes = {}
tag_regexes    = {}

for own glyph, entity of entities
  entity_regexes[entity] = RegExp glyph, "g"

for own glyph, tag of tags
  tag_regexes["$1<#{tag}>$2</#{tag}>$3"] = RegExp "(^|\\s)#{glyph}(.+?)#{glyph}($|\\s)", "g"

Texticle.parse_line = (input) ->
  input = input.replace /([\d\s'"])x(?=[\d\s])/g, "$1#215;"
  input = input.replace /^-\s|(\s)-\s/g,          "$1&#8211; "

  for own format, regex of entity_regexes
    input = input.replace regex, format

  input = input.replace /\^(.+)\^/g,          "<sup>$1</sup>"
  input = input.replace /~(.+)~/g,            "<sub>$1</sub>"
  input = input.replace /([A-Z]+)\((.+?)\)/g, "<acronym title=\"$2\">$1</acronym>"

  for own format, regex of tag_regexes
    input = input.replace regex, format

  input

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
