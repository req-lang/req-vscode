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

## License

All the contents of this repository are licensed under the license in provided by the LICENSE file.
Any content, including but not limited to source file must feature the below mentioned copyright notice

req language VSCode extension
Copyright (C) 2026  Sami Dahoux

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
