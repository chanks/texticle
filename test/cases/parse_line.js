parse_line = [
  {
    'name'    : "A triplet of periods will become an ellipsis.",
    'textile' : "Oh... I wish I were...",
    'html'    : "Oh&#8230; I wish I were&#8230;"
  },
  {
    'name'    : "A double hyphen will become an em dash.",
    'textile' : "Oy--my giblets!",
    'html'    : "Oy&#8212;my giblets!"
  },
  {
    'name'    : "A double hyphen will also work with spaces around it.",
    'textile' : "And oy -- my other giblets!",
    'html'    : "And oy &#8212; my other giblets!"
  },
  {
    'name'    : "Sets of double hyphens will become em dashes.",
    'textile' : "My main point--with a minor subthought--was what again?",
    'html'    : "My main point&#8212;with a minor subthought&#8212;was what again?"
  },
  {
    'name'    : "Sets of double hyphens will become em dashes, even with space around them.",
    'textile' : "My main point -- with a minor subthought -- was what again?",
    'html'    : "My main point &#8212; with a minor subthought &#8212; was what again?"
  },
  {
    'name'    : "A hyphen betwixt two words will become an en dash.",
    'textile' : "Hey - that reminds me of my other point - which is that you blow.",
    'html'    : "Hey &#8211; that reminds me of my other point &#8211; which is that you blow."
  },
  {
    'name'    : "A hyphen within a word will be left alone.",
    'textile' : "What a beautifully-rendered piece of well-presented Textile!",
    'html'    : "What a beautifully-rendered piece of well-presented Textile!"
  },
  {
    'name'    : "(C) will be converted to the copyright entity.",
    'textile' : "If you could copyright the copyright symbol, it would likely look like (C)(C).",
    'html'    : "If you could copyright the copyright symbol, it would likely look like &#169;&#169;."
  },
  {
    'name'    : "(TM) will be converted to the trademark entity.",
    'textile' : "If you could trademark the trademark symbol, it would likely look like (TM)(TM).",
    'html'    : "If you could trademark the trademark symbol, it would likely look like &#8482;&#8482;."
  },
  {
    'name'    : "(R) will be converted to whatever entity that is.",
    'textile' : "I forget what the R means, but (R)(R).",
    'html'    : "I forget what the R means, but &#174;&#174;."
  },
  {
    'name'    : "'x' will become a dimension sign when it is between two digits.",
    'textile' : "Reading you alright, 4x5.",
    'html'    : "Reading you alright, 4#215;5."
  },
  {
    'name'    : "'x' will become a dimension sign when it is between two digits, even when surrounded by spaces.",
    'textile' : "Reading you alright, 4 x 5.",
    'html'    : "Reading you alright, 4 #215; 5."
  },
  {
    'name'    : "'x' will chain properly to become a dimension sign several times between digits.",
    'textile' : "Chained multiplications like 6x7x8x9 are scary to me.",
    'html'    : "Chained multiplications like 6#215;7#215;8#215;9 are scary to me."
  },
  {
    'name'    : "'x' will chain properly to become a dimension sign when preceded by an inches signifier.",
    'textile' : "My cat is shaped like a box, and measures 5.5\"x8\"x15\".",
    'html'    : "My cat is shaped like a box, and measures 5.5\"#215;8\"#215;15\"."
  },
  {
    'name'    : "'x' will chain properly to become a dimension sign when preceded by a feet signifier.",
    'textile' : "My much larger cat is also shaped like a box, and measures 3'x2.5'x8'.",
    'html'    : "My much larger cat is also shaped like a box, and measures 3'#215;2.5'#215;8'."
  },
  {
    'name'    : "Asterisks will convert to <strong> tags for strength.",
    'textile' : "You look *really* ugly in that dress.",
    'html'    : "You look <strong>really</strong> ugly in that dress."
  },
  {
    'name'    : "Underscores will convert to <em> tags for emphasis.",
    'textile' : "No, I _really_ feel that way!",
    'html'    : "No, I <em>really</em> feel that way!"
  }
]
