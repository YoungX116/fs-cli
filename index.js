"use strict";

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const outputTable = require("./outputTable");

/**
 * @function [listFilesAndFolders]
 * @param {String} folder
 * @param {Array} options
 * @returns {String} files and folders
 */
const listFilesAndFolders = (targetFolder, options) => {
  const files = [];
  const folders = [];

  try {
    fs.readdirSync(targetFolder || process.cwd()).forEach(f => {
      // generate the full path for each file or folder in the targetFolder
      let p = targetFolder ? path.resolve(targetFolder, f) : f;

      let stats = fs.statSync(p);
      if (stats.isFile()) files.push({ ...stats, name: f, path: p });
      else if (stats.isDirectory())
        folders.push({ ...stats, name: f, path: p });
    });
  } catch (err) {
    if (err.code === "ENOENT")
      console.error(chalk.red(`ENOENT, no such folder ${targetFolder}`));
    else console.error(chalk.red(err));
    process.exit(1);
  }

  // print the path
  console.log(
    "\n" +
      chalk.yellow("path: ") +
      (targetFolder ? path.resolve(targetFolder) : process.cwd())
  );

  // print files in the targetFolder
  console.log(chalk.green("files:"));
  if (files.length > 0) {
    if (options.long) {
      outputTable(files, true);
    } else {
      files.forEach(file => {
        console.log(`   ${file.name}`);
      });
    }
  } else console.log(chalk.red("    No file"));

  // print folders in the targetFolder
  console.log(chalk.blue("folders:"));
  if (folders.length > 0) {
    if (options.long) {
      outputTable(folders, false);
    } else {
      folders.forEach(folder => {
        console.log(`   ${folder.name}`);
      });
    }

    if (options.recursive) {
      folders.forEach(folder => listFilesAndFolders(folder.path, options));
    }
  } else console.log(chalk.red("    No folder"));
};

/**
 * @function [errorHandler]
 * @param {String} command
 * @returns {String} errorMessage
 */
const errorHandler = command => {
  console.error(
    chalk.red(`Invalid command: ${command}\n`) +
      "See --help for a list of available commands.\n"
  );
  process.exit(1);
};

module.exports = { listFilesAndFolders, errorHandler };
