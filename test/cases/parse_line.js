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
  }
]
