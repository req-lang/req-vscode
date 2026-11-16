# req-lang README

Language support VSCode plugin for the req language.

## Features

* Syntax coloring for the req language
* Language server integration (diagnostics, etc. as `reqlsp` implements them)

## Requirements

The `reqlsp` executable available in your `PATH` (see Extension Settings to change this).

## Extension Settings

| Setting | Default | Description |
| --- | --- | --- |
| `req.lsp.path` | `reqlsp` | Language server executable (looked up in `PATH`) |
| `req.trace.server` | `off` | `messages`/`verbose` traces LSP traffic in the *req Language Server* output channel |

Command: `req: Restart Language Server` (also triggered automatically when `req.lsp.*` changes).

## Known Issues

Syntax coloring is experimental and is subject to bugs and changes

## Release Notes

**None**

## Develop

The extension can be run by opening this project in VSCode and typing `F5`. 
A new VSCode appears with the extension enabled as debug.

To run the extension again (after unwatched modifications), 
open the VSCode window with this project and use `Ctrl + Shift + F5`.

### Debugging the language server

Install the dependencies once with `npm install`. The extension runs `reqlsp` from `PATH`,
so for development symlink the debug build once:

```sh
cargo build
ln -sf "$PWD/target/debug/reqlsp" ~/.cargo/bin/reqlsp
```

After that, each `cargo build` updates the server; run `req: Restart Language Server` to load it.
Server logs (`client.log_message`) and stderr appear in the *req Language Server* output channel;
set `req.trace.server` to `verbose` to see the raw messages. To use a debugger, attach
(e.g. CodeLLDB) to the running `reqlsp` process.

For a release install, replace the symlink with `cargo install --path reqlsp`.

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
