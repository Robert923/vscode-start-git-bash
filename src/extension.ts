'use strict';
import * as vscode from 'vscode';
var spawn = require('child_process').spawn;

/**
 * Start bash in the current VSCode workspace root folder
 */ 
function startBash() {
    // If spawn wasn't successfully loaded there's nothing we can do
    if( !spawn ) {
        vscode.window.showErrorMessage('Could not start bash - no spawn function found (sorry).');
        return;
    }

    // Get the current workspace
    const workspace = vscode.workspace;
    if( !workspace ) return;     // If there's no open work space there's nothing we can do

    // Launch bash in the root path of the workspace 
    // http://stackoverflow.com/questions/36587904/how-to-start-bash-in-a-directory-in-windows-bat
    // git-bash.exe" --cd=D:\mozdev
    try {
        const rootPath = workspace.rootPath;
        if( !rootPath || rootPath.length==0 ) return;
        
        const pathArg = "--cd=" + rootPath;
        spawn('git-bash.exe',[pathArg]);
        
        // Display a message box to the user
        vscode.window.showInformationMessage('Bash started @ "' + rootPath + '"');
    } catch( e ) {
        vscode.window.showErrorMessage('Failed to start bash - is git-bash.exe on the path?');
    }//catch
}


// This method is called when your extension is activated
// The extension will be activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.startGitBash', startBash);
    context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {
    // Empty
}