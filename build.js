import { readLines } from "https://deno.land/std/io/mod.ts";

const result = [];
for (let i = 1; i <= 10; i++) {
  const words = [];
  const fileReader = await Deno.open("ngram-idioms/kanji-3-5000/" + i + ".lst");
  for await (const line of readLines(fileReader)) {
    words.push(line);
  }
  result.push(words.join(","));
}
Deno.writeTextFile("src/words.lst", result.join("\n"));
