parse = [
  // Simple spacing - paragraphs and line breaks.

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
  },



  // Headers.

  {
    'name'    : "A line can be marked as a header.",
    'textile' : "h1. Big Picture\n\nBlah Blah Blah.\n\nh3. Slightly Smaller Picture\n\nTra la la.",
    'html'    : "<h1>Big Picture</h1>\n<p>Blah Blah Blah.</p>\n<h3>Slightly Smaller Picture</h3>\n<p>Tra la la.</p>"
  },



  // Horizontal rules.

  {
    'name'    : "A horizontal rule can be defined between paragraphs with a line of three asterisks.",
    'textile' : "A normal paragraph *** is unaffected.\n\n***\n\nAnd here is another paragraph.",
    'html'    : "<p>A normal paragraph <strong>*</strong> is unaffected.</p>\n<hr />\n<p>And here is another paragraph.</p>"
  },
  {
    'name'    : "Or it can be more than three asterisks.",
    'textile' : "A normal paragraph **** is unaffected.\n\n****\n\nAnd here is another paragraph.",
    'html'    : "<p>A normal paragraph <strong>**</strong> is unaffected.</p>\n<hr />\n<p>And here is another paragraph.</p>"
  },
  {
    'name'    : "It can't be less than three, though.",
    'textile' : "A normal paragraph *** is unaffected.\n\n**\n\nAnd here is another paragraph.",
    'html'    : "<p>A normal paragraph <strong>*</strong> is unaffected.</p>\n<p>**</p>\n<p>And here is another paragraph.</p>"
  },
  {
    'name'    : "The line also can't have any other text on it.",
    'textile' : "A normal paragraph *** is unaffected.\n\n***blah\n\nAnd here is another paragraph.",
    'html'    : "<p>A normal paragraph <strong>*</strong> is unaffected.</p>\n<p><strong>*</strong>blah</p>\n<p>And here is another paragraph.</p>"
  },
  {
    'name'    : "Though whitespace doesn't count.",
    'textile' : "A normal paragraph *** is unaffected.\n\n  ***  \n\nAnd here is another paragraph.",
    'html'    : "<p>A normal paragraph <strong>*</strong> is unaffected.</p>\n<hr />\n<p>And here is another paragraph.</p>"
  },
  {
    'name'    : "It can also be done with three dashes.",
    'textile' : "A normal paragraph --- is unaffected.\n\n---\n\nAnd here is another paragraph.",
    'html'    : "<p>A normal paragraph &#8212;- is unaffected.</p>\n<hr />\n<p>And here is another paragraph.</p>"
  },
  {
    'name'    : "Or three underscores.",
    'textile' : "A normal paragraph ___ is unaffected.\n\n___\n\nAnd here is another paragraph.",
    'html'    : "<p>A normal paragraph <em>_</em> is unaffected.</p>\n<hr />\n<p>And here is another paragraph.</p>"
  },
]
