addons.register('messageSender', function(data) {
  // safety: require data.msg to be a string
  if (!data || typeof data.msg !== 'string') return;

  // TBJB printer: always nick "TBJB" and green
  function tbjb(msg) {
    printMsg({
      date: Date.now(),
      nick: "TBJB",
      color: "green",
      style: "opacity: 0.7;",
      home: 'local',
      msg: msg
    });
  }

  // prints a message that appears to come from the current user (local-only)
  function userSay(msg) {
    printMsg({
      date: Date.now(),
      nick: data.nick || "You",
      color: data.color || "white",
      style: data.style || "opacity: 0.9;",
      home: data.home || 'local',
      msg: msg
    });
  }

  var text = data.msg.trim();

  // If the message doesn't start with "/" it's not a command — leave it untouched.
  if (!text.startsWith('/')) return;

  // Commands (only these modify data.msg or emit TBJB messages)
  if (text === "/wtf") {
    data.msg = '';
    tbjb("$(black)$[white]wtf");
    return;
  }

  // /drunk: replace the outgoing message with "im drunk" so the user actually says it
  if (text === "/drunk") {
    data.msg = "im drunk";
    return; // let the modified data.msg be sent normally
  }

  if (text === "/dance") {
    data.msg = '';
    tbjb("does an extremely awkward little dance. 💃🕺");
    return;
  }

  if (text === "/shrug") {
    data.msg = '';
    tbjb("¯\\_(ツ)_/¯");
    return;
  }

  if (text === "/flip") {
    data.msg = '';
    tbjb("(╯°□°）╯︵ ┻━┻");
    return;
  }

  if (text === "/unflip") {
    data.msg = '';
    tbjb("┬─┬ ノ( ゜-゜ノ)");
    return;
  }

  if (text === "/fortune") {
    var fortunes = [
      "You will soon find something you didn't lose.",
      "A smooth sea never made a skilled mime.",
      "Fortune favors the confused.",
      "An unexpected nap will improve your day.",
      "You will invent a new way to open jam."
    ];
    var f = fortunes[Math.floor(Math.random() * fortunes.length)];
    data.msg = '';
    tbjb("fortune: " + f);
    return;
  }

  if (text === "/cow") {
    data.msg = '';
    tbjb("<Moo>  (\\__/)\n       (•ㅅ•)\n       / 　 づ");
    return;
  }

  if (text === "/ping") {
    data.msg = '';
    var fakeLatency = Math.floor(Math.random() * 200) + 20;
    tbjb("pong — " + fakeLatency + "ms");
    return;
  }

  // /roll [max]
  if (text === "/roll" || text.startsWith("/roll ")) {
    var max = 6;
    if (text.startsWith("/roll ")) {
      var arg = text.slice(6).trim();
      var parsed = parseInt(arg, 10);
      if (!isNaN(parsed) && parsed > 0) max = parsed;
    }
    var result = Math.floor(Math.random() * max) + 1;
    data.msg = '';
    tbjb("rolled a " + result + " (1-" + max + ")");
    return;
  }

  // /echo <text> - reverse the text
  if (text.startsWith("/echo ")) {
    var toEcho = text.slice(6);
    data.msg = '';
    var reversed = toEcho.split('').reverse().join('');
    tbjb("echo: " + reversed);
    return;
  }

  // New useless commands
  if (text === "/lenny") {
    data.msg = '';
    tbjb("( ͡° ͜ʖ ͡°)");
    return;
  }

  if (text === "/boop") {
    data.msg = '';
    tbjb("boop! *boop* (you were gently booped)");
    return;
  }

  if (text === "/hug") {
    data.msg = '';
    tbjb("hugs you. 🤗");
    return;
  }

  if (text === "/compliment") {
    var comps = [
      "Your keyboard is a work of art.",
      "You have excellent imaginary friends.",
      "Your presence improves the Wi‑Fi signal locally.",
      "You put the 'pro' in procrastination.",
      "You are a beautiful potato."
    ];
    data.msg = '';
    tbjb("compliment: " + comps[Math.floor(Math.random() * comps.length)]);
    return;
  }

  if (text === "/yodel") {
    data.msg = '';
    tbjb("Yodel-ay-hee-hoo! 🎵");
    return;
  }

  if (text === "/nom") {
    data.msg = '';
    tbjb("nom nom nom (delicious imaginary snack)");
    return;
  }

  if (text === "/sneeze") {
    data.msg = '';
    tbjb("*Achoo!* Gesundheit!");
    return;
  }

  if (text.startsWith("/8ball ")) {
    var answers = [
      "It is certain.",
      "Ask again later.",
      "My sources say no.",
      "Without a doubt.",
      "Concentrate and ask again.",
      "Very doubtful.",
      "Signs point to yes.",
      "Cannot predict now."
    ];
    var q = text.slice(6).trim();
    data.msg = '';
    tbjb("/8ball: " + (q ? q + " → " : "") + answers[Math.floor(Math.random() * answers.length)]);
    return;
  }

  if (text === "/asciiheart") {
    data.msg = '';
    tbjb("  .:::.   .:::.\\n :::::::.:::::::\\n :::::::::::::::\\n ':::::::::::::'\\n   ':::::::::'\\n     ':::::'\\n       ':'");
    return;
  }

  if (text === "/sing") {
    data.msg = '';
    tbjb("la la la la, the toaster sings at midnight ♪");
    return;
  }

  if (text === "/glasses") {
    data.msg = '';
    tbjb("puts on their finest pixel glasses. 🤓");
    return;
  }

  if (text === "/spitball") {
    data.msg = '';
    tbjb("spitball flicked! It missed by a mile.");
    return;
  }

  if (text === "/stare") {
    data.msg = '';
    tbjb("*stares silently into the void*");
    return;
  }

  if (text === "/snek") {
    data.msg = '';
    tbjb("~<:3 )~~");
    return;
  }

  if (text === "/dance2") {
    data.msg = '';
    tbjb("does a slow robot shuffle. 🤖");
    return;
  }

  // unknown command: do nothing special and let it flow (so the server can handle it)
});
