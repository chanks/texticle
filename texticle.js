(function() {
  var endline, format, glyph, regex, regexes, tag, tags, _i, _len, _ref;

  window.Texticle = {};

  endline = "\n";

  regexes = [[/\.\.\./g, "&#8230;"], [/(^|\s)-(\s|$)/g, "$1&#8211;$2"], [/--/g, "&#8212;"], [/\([Cc]\)/g, "&#169;"], [/\([Rr]\)/g, "&#174;"], [/\((TM|tm)\)/g, "&#8482;"], [/([\d\s'\"])x(?=[\d\s])/g, "$1#215;"], [/'/g, "&#8217;"], [/(^|\s)"/g, "$1&#8220;"], [/"(\s|$)/g, "&#8221;$1"], [/([A-Z]+)\((.+?)\)/g, "<acronym title=\"$2\">$1</acronym>"], [/\[\^(.+?)\^\]/g, "<sup>$1</sup>"], [/\[~(.+?)~\]/g, "<sub>$1</sub>"]];

  tags = [["\\*\\*", 'b'], ["__", 'i'], ["\\*", 'strong'], ["_", 'em'], ["@", 'code'], ["\\?\\?", 'cite'], ["\\+", 'ins'], ["\\-", 'del'], ["\\^", 'sup'], ["~", 'sub']];

  for (_i = 0, _len = tags.length; _i < _len; _i++) {
    _ref = tags[_i], glyph = _ref[0], tag = _ref[1];
    regex = RegExp("(^|\\s)" + glyph + "(.+?)" + glyph + "($|\\s)", "g");
    format = "$1<" + tag + ">$2</" + tag + ">$3";
    regexes.push([regex, format]);
  }

  Texticle.parse_line = function(input) {
    var _j, _len2, _ref2;
    for (_j = 0, _len2 = regexes.length; _j < _len2; _j++) {
      _ref2 = regexes[_j], regex = _ref2[0], format = _ref2[1];
      input = input.replace(regex, format);
    }
    return input;
  };

  Texticle.parse = function(input) {
    var heading, in_paragraph, index, line, lines, next_line, output, _len2;
    output = "";
    in_paragraph = false;
    lines = input.split(endline);
    for (index = 0, _len2 = lines.length; index < _len2; index++) {
      line = lines[index];
      next_line = lines[index + 1];
      if (!line.match(/\S/)) continue;
      if (line.match(/^[*\-_\s]{3,}$/)) {
        output += "<hr />" + endline;
        continue;
      }
      if (heading = /^h(\d)\.\s*(.*)/.exec(line)) {
        output += ("<h" + heading[1] + ">" + heading[2] + "</h" + heading[1] + ">") + endline;
        continue;
      }
      if (!in_paragraph) {
        output += "<p>";
        in_paragraph = true;
      }
      output += Texticle.parse_line(line);
      if (next_line && next_line.match(/\S/)) {
        output += "<br />" + endline;
      } else {
        output += "</p>" + endline;
        in_paragraph = false;
      }
    }
    return output.replace(/\s$/, "");
  };

}).call(this);
