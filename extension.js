/*
 * req language VSCode extension
 * Copyright (C) 2026  Sami Dahoux
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const vscode = require("vscode");
const { LanguageClient } = require("vscode-languageclient/node");

/** @type {LanguageClient | undefined} */
let client;

/**
 * Builds the command used to spawn the language server from `req.lsp.path`
 * (default `reqlsp`, looked up in PATH).
 */
function serverOptions() {
  const config = vscode.workspace.getConfiguration("req.lsp");
  return { command: config.get("path", "reqlsp"), args: [] };
}

async function startClient() {
  let server;
  try {
    server = serverOptions();
  } catch (e) {
    vscode.window.showErrorMessage(`req: ${e.message}`);
    return;
  }

  client = new LanguageClient("req", "req Language Server", server, {
    documentSelector: [{ scheme: "file", language: "req" }],
  });

  try {
    await client.start();
  } catch (e) {
    vscode.window.showErrorMessage(
      `req: failed to start the language server (${server.command}): ${e.message}`,
    );
    client = undefined;
  }
}

async function stopClient() {
  if (client) {
    const c = client;
    client = undefined;
    await c.stop();
  }
}

async function restart() {
  await stopClient();
  await startClient();
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("req.restartServer", restart),
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("req.lsp")) {
        restart();
      }
    }),
  );
  return startClient();
}

function deactivate() {
  return stopClient();
}

module.exports = { activate, deactivate };
