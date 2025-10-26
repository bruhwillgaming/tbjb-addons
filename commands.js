addons.register('messageSender', function(data) {
  if (data.msg == "/wtf") { // match the command
    data.msg = '' // clear data.msg
    printMsg({ date: Date.now(), nick: "TBJB", color: "green", style: "opacity: 0.7;", home: 'local', msg: "$(black)$[white]wtf" }); // imitate ~ messages
    // more logic
  }
  if (data.msg.startsWith == "/info ") { // match the command
    const arg = data.msg.slice(8).trim(); // change 8 to match the number of characters in the command, including "/" and an extra space, 8 in this case (you may use other logic to do arguments, this is just imitating how janken does it)
    data.msg = '' // clear data.msg
    printMsg({ date: Date.now(), nick: "TBJB", color: "white", style: "opacity: 0.7;", home: 'local', msg: "info:" + data.home data.nick  }); // imitate ~ messages
    // more logic
  }
});
