(function() {
  var glyph, tag, tag_regexes, tags,
    __hasProp = Object.prototype.hasOwnProperty;

  window.Texticle = {};

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

  tag_regexes = {};

  for (glyph in tags) {
    if (!__hasProp.call(tags, glyph)) continue;
    tag = tags[glyph];
    tag_regexes["$1<" + tag + ">$2</" + tag + ">$3"] = RegExp("(^|\\s)" + glyph + "(.+?)" + glyph + "($|\\s)", "g");
  }

  Texticle.parse_line = function(input) {
    var format, regex;
    input = input.replace(/\.\.\./g, "&#8230;");
    input = input.replace(/--/g, "&#8212;");
    input = input.replace(/^-\s|(\s)-\s/g, "$1&#8211; ");
    input = input.replace(/\([Cc]\)/g, "&#169;");
    input = input.replace(/\([Rr]\)/g, "&#174;");
    input = input.replace(/\((TM|tm)\)/g, "&#8482;");
    input = input.replace(/([\d\s'"])x(?=[\d\s])/g, "$1#215;");
    input = input.replace(/'/g, "&#8217;");
    input = input.replace(/^"|(\s)"/g, "$1&#8220;");
    input = input.replace(/"(\s)|"$/g, "&#8221;$1");
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
