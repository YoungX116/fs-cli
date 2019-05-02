#!/usr/bin/env node

const program = require("commander");

const { listFilesAndFolders, errorHandler } = require("./index.js");

program.version("1.0.0", "-v, --version").description("Basic File System");

// list [folder] command
program
  .command("list [folder]")
  .alias("ls")
  .description("List files and folders")
  .option(
    "-l, --long",
    "Long listing of files and folders, show size and last modified time"
  )
  .option(
    "-r, --recursive",
    "List recursively, including the contents of all subfolders and their subfolders and so on."
  )
  .action(listFilesAndFolders);

// error on unknown commands
program.on("command:*", () => errorHandler(program.args.join(" ")));

program.parse(process.argv);
