parse_line = [
  // Ellipses.

  {
    'name'    : "A triplet of periods will become an ellipsis.",
    'textile' : "Oh... I wish I were...",
    'html'    : "Oh&#8230; I wish I were&#8230;"
  },



  // Hyphens to en and em dashes.

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



  // Copyright/Trademark signs.

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



  // Dimensional notation.

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
    'html'    : "My much larger cat is also shaped like a box, and measures 3&#8217;#215;2.5&#8217;#215;8&#8217;."
  },



  // Text emphasis.

  {
    'name'    : "Asterisks will convert to <strong> tags for strength.",
    'textile' : "You look *really* ugly in that dress.",
    'html'    : "You look <strong>really</strong> ugly in that dress."
  },
  {
    'name'    : "Underscores will convert to <em> tags for emphasis.",
    'textile' : "No, I _really_ feel that way!",
    'html'    : "No, I <em>really</em> feel that way!"
  },
  {
    'name'    : "Double asterisks will convert to <b> tags for strength.",
    'textile' : "You look **really** ugly in that dress.",
    'html'    : "You look <b>really</b> ugly in that dress."
  },
  {
    'name'    : "Double underscores will convert to <i> tags for emphasis.",
    'textile' : "No, I __really__ feel that way!",
    'html'    : "No, I <i>really</i> feel that way!"
  },



  // Fancy quotes.

  {
    'name'    : "Double quotes around words are converted to curly quotations.",
    'textile' : "I said, \"Mr. Darcy, fuck off!\" right to his face!",
    'html'    : "I said, &#8220;Mr. Darcy, fuck off!&#8221; right to his face!"
  },
  {
    'name'    : "Single quotes are also converted to curly versions.",
    'textile' : "And then he said, \"I said, 'Mr. Darcy, fuck off!' right to his face!\" right to my face!",
    'html'    : "And then he said, &#8220;I said, &#8217;Mr. Darcy, fuck off!&#8217; right to his face!&#8221; right to my face!"
  },



  // Acronyms and Citations.

  {
    'name'    : "Acronyms can be specified with an acronym tag.",
    'textile' : "I call BS(Bullshit) on you, good sir.",
    'html'    : "I call <acronym title=\"Bullshit\">BS</acronym> on you, good sir."
  },
  {
    'name'    : "Citations can be demarcated by double question marks.",
    'textile' : "Citation: ??The Bible?? by God.",
    'html'    : "Citation: <cite>The Bible</cite> by God."
  },



  // Insertions/deletions.

  {
    'name'    : "Surround a word with pluses to indicate its insertion.",
    'textile' : "You are +not+ a very good liar, good sir.",
    'html'    : "You are <ins>not</ins> a very good liar, good sir."
  },
  {
    'name'    : "Surround a word with minuses to indicate its insertion.",
    'textile' : "Hello -cruel- world.",
    'html'    : "Hello <del>cruel</del> world."
  },
  {
    'name'    : "Insertions and deletions can apply to many words as well.",
    'textile' : "You are a -perfect ass- +total gentleman+, good sir.",
    'html'    : "You are a <del>perfect ass</del> <ins>total gentleman</ins>, good sir."
  }
]
