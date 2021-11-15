import { readLines } from "https://deno.land/std/io/mod.ts";

async function build(threshold) {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    const idioms = [];
    const fileReader = await Deno.open(
      `graded-idioms-ja/dist/${i}.csv`,
    );
    for await (const line of readLines(fileReader)) {
      const arr = line.split(",");
      const word = arr[0];
      const count = parseInt(arr[1]);
      if (word.length == 3 && count >= threshold) {
        idioms.push(word);
      }
    }
    result.push(idioms.join(","));
  }
  Deno.writeTextFileSync(`src/words.lst`, result.join("\n"));
}

const threshold = 100000;
await build(threshold);
