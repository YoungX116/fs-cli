# fs-cli
#### Author: Yang

This project is an simple implementation of Linux/Unix `ls` command by mainly use node.js.

* **Important modules used**
  * **fs:** this module is used to analyze the folder and recognize files and folders.
  * **path:** this module is used to generate valid path.
  * **commander:** this module is used to define customized command and corresponding behavior.
  * **chalk:** this module is used to change the color of text in the command line.
  * **cli-table:** this module is used to output data in table format.
  
* **Installation**
  1. clone or download this project.
  2. after unzip, open the command line and go to the working directory of this project.
  3. run `npm install` to install all the modules required.
  4. run `npm link` to symbolic link the application so we can use the application globally in our system.\
  **Note:** for step 4, when use macOS system, run `sudo npm link` instead may give the right result.

* **Usage**

  After installation, you should be able to use the application.
  
  `fs-cli -v` or `fs-cli --version`\
  This command will output the current version of this application.

  `fs-cli -h` or `fs-cli --help`\
  This command will output the help text explaining how to use all the commands.

  `fs-cli list [targetFolder]`\
  In the command line, go to any directory and run `fs-cli list`, then the console should output files and folders reside in the current   directory.\
  **Note:** In windows system, directly run the command under root drive such as `D:/` or `E:/` may cause an error due to security issue.   In other cases, this command should work fine.
  
  > `targetFolder` is an optional user input.
  > * If it is an absolute path like `G:/test`, run command `fs-cli list G:/test` in your command line will output all the files and
  folders inside `G:/test`.
  > * If it is a relative path like `test`, run command `fs-cli list test` in your command line will output all the files and folders
  inside subfolder test relative to your current folder.
  > * If the path does not exist, output will be an error message telling you the path is invalid.

  `fs-cli ls [targetFolder]`\
  Working the same as `fs-cli list`. `ls` is a short form of `list`.

* **Additional Flags**

  `-l/--long`: with this option, the output will show files with name, size in bytes and last modified time and folders with name and       last modified time.\
  **For example:** run command `fs-cli ls --long` or `fs-cli ls -l` will output files and folders in detail mentioned above.

  `-r/--recursive`: with this option, the output will show files and folders, including the contents of all sub folders and their           subfolders and so on.\
  **For example:** run command `fs-cli ls --recursive` or `fs-cli ls -r` will output files and folders and all contents in the folders
  and so on level by level.

  **Note:** We can also use both of the flags at the same time.\
  **For example:** run command `fs-cli ls -lr` will output files and folders recursively as well as showing details.

* **Errors**

  Currently this project only support `list` command, working similarly as `ls` in Linux/Unix system or `dir` in Windows.\
  Any other command will cause an customized error message showing in the console.
  
  Currently this project only support `--long` and `--recursive` flags.\
  Any other flags cannot be interpreted by this application and will output an error message in the console.
