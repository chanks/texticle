basic = [
  {
    'name'    : "A single bare line will be formatted as a paragraph.",
    'textile' : "One solitary line.",
    'html'    : "<p>One solitary line.</p>"
  },
  {
    'name'    : "A line break will be converted to an HTML break.",
    'textile' : "The first of a doublet.\nThe second of the doublet.",
    'html'    : "<p>The first of a doublet.<br />\nThe second of the doublet.</p>"
  },
  {
    'name'    : "Two blocks will be formatted as separate paragraphs.",
    'textile' : "The first paragraph.\n\nThe second paragraph.",
    'html'    : "<p>The first paragraph.</p>\n<p>The second paragraph.</p>"
  },
  {
    'name'    : "Two blocks with a space on the blank line will be formatted as separate paragraphs.",
    'textile' : "The first paragraph.\n \nThe second paragraph.",
    'html'    : "<p>The first paragraph.</p>\n<p>The second paragraph.</p>"
  },
  {
    'name'    : "Two blocks with a tab on the blank line will be formatted as separate paragraphs.",
    'textile' : "The first paragraph.\n\t\nThe second paragraph.",
    'html'    : "<p>The first paragraph.</p>\n<p>The second paragraph.</p>"
  }
]
