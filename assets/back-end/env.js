const fs = require("fs");

module.exports = env;

function env() {
  const ob = {};

  const file = fs.readFileSync("./.env", "utf-8");

  const data = file.split("\n");

  if (!data[data.length - 1]) data.pop();

  data.forEach((e) => {
    const r = e.split("=");
    if (r.length > 1) ob[r[0].trim().toLowerCase()] = r[1].trim();
  });

  return ob;
}
