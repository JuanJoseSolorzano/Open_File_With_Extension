// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('open-file-with-extension.openWithCustom', (uri: vscode.Uri) => {
        const config = vscode.workspace.getConfiguration('open-file-with-extension');
        const customApps = config.get<Record<string, string>>('customApps');
        if(!customApps) {
            vscode.window.showErrorMessage('No custom apps configured.');
            return;
        }
        const fileExtension = path.extname(uri.fsPath).toLowerCase();
        const appPath = customApps[fileExtension];
        fs.
        cp.exec(`start "" "${appPath}" "${uri.fsPath}"`);
    });
	context.subscriptions.push(disposable);
}
export function deactivate() {}