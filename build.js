import { TextLineStream } from "jsr:@std/streams/text-line-stream";

async function build(threshold) {
  const result = [];
  for (let i = 1; i <= 12; i++) {
    const idioms = [];
    const file = await Deno.open(`graded-idioms-ja/dist/${i}.csv`);
    const lineStream = file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream());
    for await (const line of lineStream) {
      const arr = line.split(",");
      const word = arr[0];
      const count = parseInt(arr[1]);
      if (word.length != 3) continue;
      if (i <= 9) {
        if (threshold <= count) {
          idioms.push(word);
        }
      } else {
        idioms.push(word);
      }
    }
    result.push(idioms.join(","));
  }
  Deno.writeTextFileSync(`src/words.lst`, result.join("\n"));
}

const threshold = 100000;
await build(threshold);
