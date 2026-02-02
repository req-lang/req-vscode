# req-lang README

Language support VSCode plugin for the req language.

## Features

* Syntax coloring for the req language

## Requirements

**None**

## Extension Settings

**None**

## Known Issues

Syntax coloring is experimental and is subject to bugs and changes

## Release Notes

**None**

## Develop

The extension can be run by opening this project in VSCode and typing `F5`. 
A new VSCode appears with the extension enabled as debug.

To run the extension again (after unwatched modifications), 
open the VSCode window with this project and use `Ctrl + Shift + F5`.

### Changing the grammar

Working with Text Mate grammar in JSON can be quite difficult. 
In order to ease this process, a YAML file is provided for authoring.
Use the `grammars` script in order to transpile it to the actual JSON used by the extension.

    $ npm run grammars

Don't forget to do it each time you modify the grammar before running the extension again.
