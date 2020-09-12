This project is an quick and easy raidplanner for my Guild Wars 2 raid static. The goal was to have an overview of our current strategy, plan replacements and, if needed, change the strategy if key people are missing. Bonus points for filtering by player to see what their individual roles are.

# Features

## Usage
### Setup selection
The viewed setup can be changed by either selecting a week or a named setup from the sidebar or the header.
### Player filter
Selecting a player name at the top will only show their tasks. Bosses where they have no role will be hidden, same for full wings.
### Setup details
Clicking on a boss name will reveal more details about the setup, for example a text explaining the tasks of a player.
### Changing players
Selecting a player name from the details will allow open a window to change the player in this role. It will highlight the role to show that something changed.
### Changing setups
It is possible to select a setup, by clicking on its name, and change it to a different setup. Doing this will highlight the changed setup in yellow.
### Permanent links
All changes will automatically be stored in the URL. Copying and pasting this URL can be used to share a changed setup or bookmark it.


## Code
### Setup Storage
The setups are stored in JSON. There is no limitation on names, tasks or roles. But, depending on the data, it can be replaced and filtered by.
#### Selection and defaults
In the JSON setup file it is ossible to store which setups is the defaut and which is currently selected. If they are not the same it will be highlighted.

It is also possible to mark players as missing or replaced by another player. Missing players will be highlighted in red. Replacements will replace the missing player everywhere (the filter and all roles they had).
### Icons
#### Class
Keywords will be replaced by the build icon. For example "Chronomancer" would be replaced by the Chronomancer traitline icon, pulled from the official [Guild Wars 2 API](https://wiki.guildwars2.com/wiki/API). Anything that can't be replaced will be shown as plain text.
#### Boss
The boss ids are also sourced from the official [Guild Wars 2 API](https://wiki.guildwars2.com/wiki/API). Unlike builds and classes there is no boss icon api, but most bosses have a miniature in the game, that's close enough. Each boss has an optional "iconMiniId", where the item id of any miniature can be stored and this icon will be used as boss icon.
### Setup links
Setups can be linked to by week or by a name, or both. They will automatically be created if a setup is added to the "weeklySetups" or "namedSetups" list in [Setups.js](/src/Setups.js).


# Code
The code is currently not intended to be generic. Players and setups are hardcoded in it. Feel free to copy it and create your own setup though.
## Run
Using `npm start` will run it locally on your machine.
## Build
Using `npm build` will create a production build in /build.
## Deploy
Using `npm deploy` would deploy the last prodction build. This currently only works for me, as the target is set in [package.json](package.json). If you want to use this command you should replace it there.
