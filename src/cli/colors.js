import * as fs from "node:fs";

const css = fs.readFileSync("./src/tailwind.css").toString();

const theme = css.match(/(?<=@theme {)(?<theme>.*?)(?=})/s);

console.log(theme.groups);
