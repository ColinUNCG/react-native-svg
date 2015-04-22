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
I am very new to iOS development, so please be patient with me.
If you know any steps on how to simplify the installation process (see below), 
please let me know!

## Installation
1. Just do the usual thing (npm install)

Some more things I need to fix, but here's how you could do it yourself:

2. you might want to delete the contents of:
./node_modules/react-native-viewport/node_modules
(I get problems building it because of recursive paths - even if I disable that)

3. Download or link or whatnot SVGKit to ./Libraries/SVGKit
(git clone https://github.com/SVGKit/SVGKit.git)

4. Copy ./node_modules/react-native

Please let me know if you encounter any problems. 

Any feedback is very welcome!

## Todos
- Add more graphs (meaningful ones, like bar-, pie-, ...)
- Clean up
- ...
