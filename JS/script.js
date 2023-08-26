"use strict";

const morseInput = $("[data-morse]");
const resultInput = $("[data-result]");
const translateBtn = $(".btn-translate");

let morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
};

translateBtn.click(function () {
  let x = morseInput.val();
  resultInput.val(result(x));
});

function result(str) {
  return str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter) => morse[`${letter.toLowerCase()}`])
        .join(" ")
    )
    .join("/");
}

window.addEventListener("load", () => {
  $("[data-morse]").val("");
  $("[data-result]").val("");
});
