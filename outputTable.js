const Table = require("cli-table");

const outputTable = (arr, isFile) => {
  const table = new Table({
    head: isFile
      ? ["name", "size", "last modified time"]
      : ["name", "last modified time"],
    chars: {
      top: "",
      "top-mid": "",
      "top-left": "",
      "top-right": "",
      bottom: "",
      "bottom-mid": "",
      "bottom-left": "",
      "bottom-right": "",
      left: "",
      "left-mid": "",
      mid: "",
      "mid-mid": "",
      right: "",
      "right-mid": "",
      middle: " "
    },
    style: { "padding-left": 3, "padding-right": 0 }
  });

  arr.forEach(ele => {
    let row = [];

    row.push(ele.name);

    if (isFile) row.push(ele.size + "bytes");

    let mtime = new Date(ele.mtime)
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");
    row.push(mtime);

    table.push(row);
  });

  console.log(table.toString());
};

module.exports = outputTable;
