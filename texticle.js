(function() {

  window.Texticle = {};

  Texticle.parse_line = function(input) {
    input = input.replace(/\.\.\./g, "&#8230;");
    input = input.replace(/--/g, "&#8212;");
    input = input.replace(/\s-\s/g, " &#8211; ");
    input = input.replace(/\(C\)/g, "&#169;");
    input = input.replace(/\(R\)/g, "&#174;");
    return input = input.replace(/\(TM\)/g, "&#8482;");
  };

  Texticle.parse = function(input) {
    var in_paragraph, index, line, lines, next_line, output, _len;
    output = "";
    in_paragraph = false;
    lines = input.split("\n");
    for (index = 0, _len = lines.length; index < _len; index++) {
      line = lines[index];
      next_line = lines[index + 1];
      if (!line.match(/\S/)) continue;
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
