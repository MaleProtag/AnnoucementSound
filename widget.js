var chatters = {
  'username' : {'song': '', 'hasTalked': 0}, 
};



window.addEventListener('onEventReceived', function (obj) {
  if (!obj.detail.event) {
    return;
  }
  
  const listener = obj.detail.listener.split("-")[0];
  const event = obj.detail.event;
  
  if (listener != 'message') {
    return;
  }
  
  const nick = event.data.nick;
  if (nick in chatters) {
    if (chatters[nick].hasTalked) {
      return;
    }
    
    cuties[nick].hasTalked = true;
  
    var audio = new Audio(chatters[nick].song);
    audio.play();
  }

  //console.log(listener);
  //console.log(event);
});

window.addEventListener('onWidgetLoad', function (obj) {
  const fieldData = obj.detail.fieldData;
  
  for (var user in chatters) {
    console.log(user + ' ' + fieldData[user+'Sound']);
    chatters[user].hasTalked = false;
    chatters[user].song = fieldData[user+'Sound'];
  }
});
