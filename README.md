# req-lang README

Language support VSCode plugin for the req language.

## Features

* Syntax coloring for the req language
* Language server integration (diagnostics, etc. as `req-lsp` implements them)

## Requirements

The `req-lsp` executable available in your `PATH` (see Extension Settings to change this).

## Extension Settings

| Setting | Default | Description |
| --- | --- | --- |
| `req.lsp.mode` | `binary` | `binary` runs `req.lsp.path`; `cargo` runs `cargo run` on the reqlsp crate (debug build) |
| `req.lsp.path` | `req-lsp` | Server executable used in `binary` mode |
| `req.lsp.cargoManifestPath` | `""` | Absolute path to reqlsp's `Cargo.toml`, required in `cargo` mode |
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

Install the dependencies once with `npm install`. Then, in the settings of the window
the extension runs in (`F5` host), point the extension to the crate:

```json
{
  "req.lsp.mode": "cargo",
  "req.lsp.cargoManifestPath": "/absolute/path/to/req-mono/reqlsp/Cargo.toml"
}
```

The server is then started with `cargo run --manifest-path ... --bin req-lsp`, so every
`req: Restart Language Server` rebuilds it in debug mode. Server logs (`client.log_message`)
and stderr appear in the *req Language Server* output channel; set `req.trace.server` to
`verbose` to see the raw messages.

To attach a native debugger instead, build with `cargo build` and use `binary` mode with
`req.lsp.path` set to `.../target/debug/req-lsp`, then attach (e.g. CodeLLDB) to the process.

For a release install, `cargo install --path reqlsp` puts `req-lsp` in `~/.cargo/bin`.

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
