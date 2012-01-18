parse_line = [
  // Ellipses.

  {
    'name'    : "A triplet of periods will become an ellipsis.",
    'textile' : "Oh ... I wish I were an Oscar Mayer weiner...",
    'html'    : "Oh &#8230; I wish I were an Oscar Mayer weiner&#8230;"
  },
  {
    'name'    : "Ellipses will work even when surrounded by words.",
    'textile' : "Oh...fuck it.",
    'html'    : "Oh&#8230;fuck it."
  },
  {
    'name'    : "Ellipses will work even starting a line.",
    'textile' : "...what did you call me?",
    'html'    : "&#8230;what did you call me?"
  },
  {
    'name'    : "More than three periods will be partially converted to an ellipsis.",
    'textile' : "Hello....Newman.",
    'html'    : "Hello&#8230;.Newman."
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
    'name'    : "A double hyphen at the beginning of a line will also become an em dash.",
    'textile' : "-- Sincerely, Mr. Darcy.",
    'html'    : "&#8212; Sincerely, Mr. Darcy."
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
    'name'    : "A hyphen at the beginning of a line will be converted to an en dash.",
    'textile' : "- This lets me list my thoughts more clearly.",
    'html'    : "&#8211; This lets me list my thoughts more clearly."
  },
  {
    'name'    : "A hyphen at the end of a line will be converted to an en dash.",
    'textile' : "Dearest Dr. Darcy -",
    'html'    : "Dearest Dr. Darcy &#8211;"
  },



  // Copyright/Trademark signs.

  {
    'name'    : "(C) will be converted to the copyright entity.",
    'textile' : "If you could copyright the copyright symbol, it would likely look like (C)(C).",
    'html'    : "If you could copyright the copyright symbol, it would likely look like &#169;&#169;."
  },
  {
    'name'    : "A lowercase (c) will also be converted to the copyright entity.",
    'textile' : "Or do it lowercase: (c)(c).",
    'html'    : "Or do it lowercase: &#169;&#169;."
  },
  {
    'name'    : "(TM) will be converted to the trademark entity.",
    'textile' : "If you could trademark the trademark symbol, it would likely look like (TM)(TM).",
    'html'    : "If you could trademark the trademark symbol, it would likely look like &#8482;&#8482;."
  },
  {
    'name'    : "(tm) also works.",
    'textile' : "Or do it lowercase: (tm)(tm).",
    'html'    : "Or do it lowercase: &#8482;&#8482;."
  },
  {
    'name'    : "(R) will be converted to whatever entity that is.",
    'textile' : "I forget what the R means, but (R)(R).",
    'html'    : "I forget what the R means, but &#174;&#174;."
  },
  {
    'name'    : "And, finally, (r).",
    'textile' : "Or do it lowercase: (r)(r).",
    'html'    : "Or do it lowercase: &#174;&#174;."
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
    'name'    : "Multiple sets of asterisks will parse properly.",
    'textile' : "You look *really* ugly in *that* dress.",
    'html'    : "You look <strong>really</strong> ugly in <strong>that</strong> dress."
  },
  {
    'name'    : "Asterisks at either end of the sentence will still parse correctly.",
    'textile' : "*Any* way you want it, *that's the way you need it.*",
    'html'    : "<strong>Any</strong> way you want it, <strong>that&#8217;s the way you need it.</strong>"
  },
  {
    'name'    : "Asterisks will not be parsed if there's nothing between them.",
    'textile' : "Your mother made you in a parking lot. ** My mother made me out of flesh and wire.",
    'html'    : "Your mother made you in a parking lot. ** My mother made me out of flesh and wire."
  },
  {
    'name'    : "Underscores will convert to <em> tags for emphasis.",
    'textile' : "No, I _really_ feel that way!",
    'html'    : "No, I <em>really</em> feel that way!"
  },
  {
    'name'    : "Multiple sets of underscores will parse properly.",
    'textile' : "You look _really_ ugly in _that_ dress.",
    'html'    : "You look <em>really</em> ugly in <em>that</em> dress."
  },
  {
    'name'    : "Underscores at either end of the sentence will still parse correctly.",
    'textile' : "_Any_ way you want it, _that's the way you need it._",
    'html'    : "<em>Any</em> way you want it, <em>that&#8217;s the way you need it.</em>"
  },
  {
    'name'    : "Underscores will not be parsed if there's nothing between them.",
    'textile' : "Your mother made you in a parking lot. __ My mother made me out of flesh and wire.",
    'html'    : "Your mother made you in a parking lot. __ My mother made me out of flesh and wire."
  },
  {
    'name'    : "Double asterisks will convert to <b> tags for strength.",
    'textile' : "You look **really** ugly in that dress.",
    'html'    : "You look <b>really</b> ugly in that dress."
  },
  {
    'name'    : "Multiple sets of double asterisks will parse properly.",
    'textile' : "You look **really** ugly in **that** dress.",
    'html'    : "You look <b>really</b> ugly in <b>that</b> dress."
  },
  {
    'name'    : "Double asterisks at either end of the sentence will still parse correctly.",
    'textile' : "**Any** way you want it, **that's the way you need it.**",
    'html'    : "<b>Any</b> way you want it, <b>that&#8217;s the way you need it.</b>"
  },
  {
    'name'    : "Double asterisks around nothing will be parsed as if they were single asterisks around some other asterisks.",
    'textile' : "Your mother made you in a parking lot. **** My mother made me out of flesh and wire.",
    'html'    : "Your mother made you in a parking lot. <strong>**</strong> My mother made me out of flesh and wire."
  },
  {
    'name'    : "Double underscores will convert to <i> tags for emphasis.",
    'textile' : "No, I __really__ feel that way!",
    'html'    : "No, I <i>really</i> feel that way!"
  },
  {
    'name'    : "Multiple sets of double underscores will parse properly.",
    'textile' : "You look __really__ ugly in __that__ dress.",
    'html'    : "You look <i>really</i> ugly in <i>that</i> dress."
  },
  {
    'name'    : "Double underscores at either end of the sentence will still parse correctly.",
    'textile' : "__Any__ way you want it, __that's the way you need it.__",
    'html'    : "<i>Any</i> way you want it, <i>that&#8217;s the way you need it.</i>"
  },
  {
    'name'    : "Double underscores around nothing will be parsed as if they were single underscores around some other underscores.",
    'textile' : "Your mother made you in a parking lot. ____ My mother made me out of flesh and wire.",
    'html'    : "Your mother made you in a parking lot. <em>__</em> My mother made me out of flesh and wire."
  },



  // Fancy quotes.

  {
    'name'    : "Double quotes around words are converted to curly quotations.",
    'textile' : "I said, \"Mr. Darcy, fuck off!\" right to his face!",
    'html'    : "I said, &#8220;Mr. Darcy, fuck off!&#8221; right to his face!"
  },
  {
    'name'    : "Curly quotations also work at the beginning and ending of lines.",
    'textile' : "\"Oy, my giblets!\"",
    'html'    : "&#8220;Oy, my giblets!&#8221;"
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
    'name'    : "Multiple acronyms in the same line will work.",
    'textile' : "I call BS(Bullshit) on you, GS(good sir).",
    'html'    : "I call <acronym title=\"Bullshit\">BS</acronym> on you, <acronym title=\"good sir\">GS</acronym>."
  },
  {
    'name'    : "Acronyms require something present in the parentheses.",
    'textile' : "You can write a function called FN() if you like.",
    'html'    : "You can write a function called FN() if you like."
  },
  {
    'name'    : "Citations can be demarcated by double question marks.",
    'textile' : "Citation: ??The Bible?? by God.",
    'html'    : "Citation: <cite>The Bible</cite> by God."
  },
  {
    'name'    : "Citations work for titles ending in question marks.",
    'textile' : "Citation: ??What's Eating Gilbert Grape???",
    'html'    : "Citation: <cite>What&#8217;s Eating Gilbert Grape?</cite>"
  },
  {
    'name'    : "Citations work for titles containing question marks.",
    'textile' : "Citation: ??What's Eating Gilbert Grape?: The Musical??",
    'html'    : "Citation: <cite>What&#8217;s Eating Gilbert Grape?: The Musical</cite>"
  },
  {
    'name'    : "Multiple citations on the same line are supported.",
    'textile' : "??What's Eating Gilbert Grape??? is alright, but ??What's Eating Gilbert Grape?: The Musical?? is phenomenal!",
    'html'    : "<cite>What&#8217;s Eating Gilbert Grape?</cite> is alright, but <cite>What&#8217;s Eating Gilbert Grape?: The Musical</cite> is phenomenal!"
  },
  {
    'name'    : "Multiple complicated citations on the same line are supported.",
    'textile' : "??What's Eating Gilbert Grape??? is alright, but ??What's Eating Gilbert Grape?: The Musical?? is phenomenal!",
    'html'    : "<cite>What&#8217;s Eating Gilbert Grape?</cite> is alright, but <cite>What&#8217;s Eating Gilbert Grape?: The Musical</cite> is phenomenal!"
  },
  {
    'name'    : "Multiple complicated citations with many following question marks are supported.",
    'textile' : "??What's Eating Gilbert Grape??? is an alright title, but I would have preferred ??What's Eating Gilbert Grape??????",
    'html'    : "<cite>What&#8217;s Eating Gilbert Grape?</cite> is an alright title, but I would have preferred <cite>What&#8217;s Eating Gilbert Grape????</cite>"
  },



  // Insertions/deletions.

  {
    'name'    : "Surround a word with pluses to indicate its insertion.",
    'textile' : "You are +not+ a very good liar, good sir.",
    'html'    : "You are <ins>not</ins> a very good liar, good sir."
  },
  {
    'name'    : "Insertions work multiple times in a line.",
    'textile' : "I am +not+ being sarcastic when I say you are +not+ a good person, good sir.",
    'html'    : "I am <ins>not</ins> being sarcastic when I say you are <ins>not</ins> a good person, good sir."
  },
  {
    'name'    : "Surround a word with minuses to indicate its deletion.",
    'textile' : "Hello -cruel- world.",
    'html'    : "Hello <del>cruel</del> world."
  },
  {
    'name'    : "Deletions work multiple times in a line.",
    'textile' : "I am -not- being sarcastic when I say you are -not- a good person, good sir.",
    'html'    : "I am <del>not</del> being sarcastic when I say you are <del>not</del> a good person, good sir."
  },
  {
    'name'    : "Insertions and deletions can apply to many words as well.",
    'textile' : "You are a -perfect ass,- +total gentleman,+ good sir.",
    'html'    : "You are a <del>perfect ass,</del> <ins>total gentleman,</ins> good sir."
  },
  {
    'name'    : "Insertions and deletions work at the edges of lines.",
    'textile' : "+Bob+ -Peter- is a good +person.+ -ferret.-",
    'html'    : "<ins>Bob</ins> <del>Peter</del> is a good <ins>person.</ins> <del>ferret.</del>"
  },
  {
    'name'    : "Insertions only work when they surround something (an empty deletion is an em dash).",
    'textile' : "This is an unedited sentence, isn't it? ++ Yes sir, it is!",
    'html'    : "This is an unedited sentence, isn&#8217;t it? ++ Yes sir, it is!"
  },



  // Superscripts/subscripts.
  {
    'name'    : "You can superscript words by surrounding them with carets.",
    'textile' : "Move your computing to the ^cloud^ where it can be up high.",
    'html'    : "Move your computing to the <sup>cloud</sup> where it can be up high."
  },
  {
    'name'    : "You can subscript words by surrounding them with tildes.",
    'textile' : "Move your computing ~underground~ where it can be low.",
    'html'    : "Move your computing <sub>underground</sub> where it can be low."
  },



  // Code blocks.
  {
    'name'    : "You can denote code blocks by surrounding them with at-symbols.",
    'textile' : "Using Texticle is as simple as putting @Texticle.parse(text)@ in your code!",
    'html'    : "Using Texticle is as simple as putting <code>Texticle.parse(text)</code> in your code!"
  },
  {
    'name'    : "Multiple code blocks can exist in the same line.",
    'textile' : "Using @Texticle@ is as simple as putting @Texticle.parse(text)@ in your code!",
    'html'    : "Using <code>Texticle</code> is as simple as putting <code>Texticle.parse(text)</code> in your code!"
  },
  {
    'name'    : "Code blocks work at the beginning and ending of lines.",
    'textile' : "@coffeescript_is_awesome = true if 2 + 2 == 4@",
    'html'    : "<code>coffeescript_is_awesome = true if 2 + 2 == 4</code>"
  },
  {
    'name'    : "Multiple email addresses won't accidentally trigger code blocks.",
    'textile' : "chris@gmail.com is way better than chris2462462@gmail.com.",
    'html'    : "chris@gmail.com is way better than chris2462462@gmail.com."
  },
]
