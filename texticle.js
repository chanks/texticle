(function() {
  var entities, entity, entity_regexes, glyph, tag, tag_regexes, tags,
    __hasProp = Object.prototype.hasOwnProperty;

  window.Texticle = {};

  entities = {
    "\\.\\.\\.": "&#8230;",
    "(^|\\s)-(\\s|$)": "$1&#8211;$2",
    "--": "&#8212;",
    "\\([Cc]\\)": "&#169;",
    "\\([Rr]\\)": "&#174;",
    "\\((TM|tm)\\)": "&#8482;",
    "([\\d\\s'\"])x(?=[\\d\\s])": "$1#215;",
    "'": "&#8217;",
    "(^|\\s)\"": "$1&#8220;",
    "\"(\\s|$)": "&#8221;$1"
  };

  tags = {
    "\\*\\*": 'b',
    "__": 'i',
    "\\*": 'strong',
    "_": 'em',
    "@": 'code',
    "\\?\\?": 'cite',
    "\\+": 'ins',
    "\\-": 'del'
  };

  entity_regexes = {};

  tag_regexes = {};

  for (glyph in entities) {
    if (!__hasProp.call(entities, glyph)) continue;
    entity = entities[glyph];
    entity_regexes[entity] = RegExp(glyph, "g");
  }

  for (glyph in tags) {
    if (!__hasProp.call(tags, glyph)) continue;
    tag = tags[glyph];
    tag_regexes["$1<" + tag + ">$2</" + tag + ">$3"] = RegExp("(^|\\s)" + glyph + "(.+?)" + glyph + "($|\\s)", "g");
  }

  Texticle.parse_line = function(input) {
    var format, regex;
    for (format in entity_regexes) {
      if (!__hasProp.call(entity_regexes, format)) continue;
      regex = entity_regexes[format];
      input = input.replace(regex, format);
    }
    input = input.replace(/\^(.+)\^/g, "<sup>$1</sup>");
    input = input.replace(/~(.+)~/g, "<sub>$1</sub>");
    input = input.replace(/([A-Z]+)\((.+?)\)/g, "<acronym title=\"$2\">$1</acronym>");
    for (format in tag_regexes) {
      if (!__hasProp.call(tag_regexes, format)) continue;
      regex = tag_regexes[format];
      input = input.replace(regex, format);
    }
    return input;
  };

  Texticle.parse = function(input) {
    var heading, in_paragraph, index, line, lines, next_line, output, _len;
    output = "";
    in_paragraph = false;
    lines = input.split("\n");
    for (index = 0, _len = lines.length; index < _len; index++) {
      line = lines[index];
      next_line = lines[index + 1];
      if (!line.match(/\S/)) continue;
      if (line.match(/^[*\-_\s]{3,}$/)) {
        output += "<hr />\n";
        continue;
      }
      if (heading = /^h(\d)\.\s*(.*)/.exec(line)) {
        output += "<h" + heading[1] + ">" + heading[2] + "</h" + heading[1] + ">\n";
        continue;
      }
      if (!in_paragraph) {
        output += "<p>";
        in_paragraph = true;
      }
      output += Texticle.parse_line(line);
      if (next_line && next_line.match(/\S/)) {
        output += "<br />\n";
      } else {
        output += "</p>\n";
        in_paragraph = false;
      }
    }
    return output.replace(/\s$/, "");
  };

}).call(this);
