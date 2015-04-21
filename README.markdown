# react-native-svg FORK

This alpha-prototype version is a fork of the great: https://github.com/brentvatne/react-native-svg
Please check out that repo!

## My changes to the base

![Screenshot](https://github.com/chroth7/react-native-svg/blob/master/screenshot.png?raw=true)

- added support for transitions in D3 (well, a possible way)
- Modularized D3 graphs (so we can load multiple charts without interference)
- configurable chart (currently, just the radius)
- Graphs update on user input
- added react-native-viewport to make the graphs fill width of screen
- also, using react-native-viewport, app reacts to orientation changes of phone

## Note
I am very new to iOS development, so please be patient with me

## Installation
Just do the usual thing (npm install)
-> Possible bug: you might want to delete the contents of:
./node_modules/react-native-viewport/node_modules
Something weird going on there.

Any feedback is very welcome!