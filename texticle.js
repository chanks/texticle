(function() {

  window.Texticle = {};

  Texticle.parse_line = function(input) {
    input = input.replace(/\.\.\./g, "&#8230;");
    input = input.replace(/--/g, "&#8212;");
    input = input.replace(/\s-\s/g, " &#8211; ");
    input = input.replace(/\(C\)/g, "&#169;");
    input = input.replace(/\(R\)/g, "&#174;");
    input = input.replace(/\(TM\)/g, "&#8482;");
    input = input.replace(/([\d\s'"])x(?=[\d\s])/g, "$1#215;");
    input = input.replace(/'/g, "&#8217;");
    input = input.replace(/\s"/g, " &#8220;");
    input = input.replace(/"\s/g, "&#8221; ");
    input = input.replace(/\*\*(.+)\*\*/g, "<b>$1</b>");
    input = input.replace(/__(.+)__/g, "<i>$1</i>");
    input = input.replace(/\*(.+)\*/g, "<strong>$1</strong>");
    input = input.replace(/_(.+)_/g, "<em>$1</em>");
    input = input.replace(/\^(.+)\^/g, "<sup>$1</sup>");
    input = input.replace(/~(.+)~/g, "<sub>$1</sub>");
    input = input.replace(/([A-Z]+)\((.+)\)/g, "<acronym title=\"$2\">$1</acronym>");
    input = input.replace(/\?\?(.+)\?\?/g, "<cite>$1</cite>");
    input = input.replace(/\s\+(.+)\+/g, " <ins>$1</ins>");
    return input = input.replace(/\s\-(.+)\-/g, " <del>$1</del>");
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
      if (line.match(/^[*\-\+_\s]{3,}$/)) {
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
