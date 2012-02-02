window.Texticle = {}

endline = "\n"

regexes = [
  # Entities.
  [/\.\.\./g,                 "&#8230;"]
  [/(^|\s)-(\s|$)/g,          "$1&#8211;$2"]
  [/--/g,                     "&#8212;"]
  [/\([Cc]\)/g,               "&#169;"]
  [/\([Rr]\)/g,               "&#174;"]
  [/\((TM|tm)\)/g,            "&#8482;"]
  [/([\d\s'\"])x(?=[\d\s])/g, "$1#215;"]
  [/'/g,                      "&#8217;"]
  [/(^|\s)"/g,                "$1&#8220;"]
  [/"(\s|$)/g,                "&#8221;$1"]

  # The acronym tag is unusual.
  [/([A-Z]+)\((.+?)\)/g, "<acronym title=\"$2\">$1</acronym>"]

  # Special, tight versions of the super/subscript tags.
  [/\[\^(.+?)\^\]/g, "<sup>$1</sup>"]
  [/\[~(.+?)~\]/g,   "<sub>$1</sub>"]
]

# Typical tags.
tags = [
  ["\\*\\*", 'b']
  ["__",     'i']
  ["\\*",    'strong']
  ["_",      'em']
  ["@",      'code']
  ["\\?\\?", 'cite']
  ["\\+",    'ins']
  ["\\-",    'del']
  ["\\^",    'sup']
  ["~",      'sub']
]

for [glyph, tag] in tags
  regex  = RegExp "(^|\\s)#{glyph}(.+?)#{glyph}($|\\s)", "g"
  format = "$1<#{tag}>$2</#{tag}>$3"

  tight_regex  = RegExp "\\[#{glyph}(.+?)#{glyph}\\]", "g"
  tight_format = "<#{tag}>$1</#{tag}>"

  regexes.push [regex, format]

Texticle.parse_line = (input) ->
  input = input.replace regex, format for [regex, format] in regexes
  input

Texticle.parse = (input) ->
  output = ""

  in_paragraph = false

  lines = input.split endline

  for line, index in lines
    next_line = lines[index + 1]

    # Skip empty lines.
    continue unless line.match(/\S/)

    if line.match(/^[*\-_\s]{3,}$/)
      output += "<hr />" + endline
      continue

    # Check for heading.
    if heading = /^h(\d)\.\s*(.*)/.exec line
      output += "<h#{heading[1]}>#{heading[2]}</h#{heading[1]}>" + endline
      continue

    # Start a paragraph unless we're already in one.
    unless in_paragraph
      output += "<p>"
      in_paragraph = true

    # Actually write the line.
    output += Texticle.parse_line(line)

    # If the next line isn't empty, it's a line break.
    if next_line and next_line.match(/\S/)
      output += "<br />" + endline
    else
      # If there isn't a next line, or if the next line is empty, leave the paragraph.
      output += "</p>" + endline
      in_paragraph = false

  # Trim trailing whitespace.
  output.replace /\s$/, ""
