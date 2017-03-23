# README

This has now largely been superceeded by built-in VSCode functionality in
[release 1.1.0 (April 2016)](https://code.visualstudio.com/updates/vApril)

----

This small Visual Studio Code extension adds a "bash" commands to VSCode that allows you to start git-bash with the current working folder
as the VSCode workspace's root folder.

Plugin provides two commands:

* `bash` will open bash in your current file's directory.
* `bash in workspace` will open bash always in the root workspace directory, despite what file is opened.

Just press F1 and then type any of above commands to start git-bash.exe.

**Note that you will need to have git-bash.exe on the environment path.**

**Enjoy!**

## Version 1.1.0
* Updated so that if you have a file open it will open git-bash in the folder of the file,
but if there's no folder it will still default to the workspace root folder.
Thanks to [Leo](https://github.com/leotm) for the idea and pull request!  :-)

## Version 1.0.4
* Improved error checking when git-bash isn't on the path
* No longer opens an informational message when it opens git-bash (that you then have to close each time, which is annoying).
