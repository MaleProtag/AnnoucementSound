# AnnoucementSound
Stream Elements widget that plays audio clip when chatter chats first time per stream.

# Info
Each chatter that will get a sound effect will need their own sound-input field. This chatter must also be added to the object at the top of widget.js. The username should be written as it appears in twitch chat (all lowercase).

# Usage

A little cumbersome:
1. Add a sound-input field for the chatter. The name of the field must be the username (all lowercase) of the chatter with a camelcaase Sound appended:
  ```
"usernameSound": {
  "type": "sound-input",
  "label": "Username"
}
 ```
so to add a user named StreamElephants it would look like
```
"streamelephantsSound": {
  "type": "sound-input",
  "label": "StreamElephants"
}
```
The label field is inconsequential. that is just what appears in the sidebar settings when arranging the widgets, but the username makes it clear who the input is for.

2. Update the chatters object to include this person.
```
var cuties = {'username' : {'song': '', 'hasTalked': 0}, {'streamelephants' :{'song':'', 'hasTalked': 0}}
```
On this line, the song can be set to anything, it will be updated with whatever was chosen in the widget settings

3. Save and select a song with the sound-input chooser in the sidebar with the widget settings.
