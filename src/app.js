function generateExcuse() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was sleeping"
  ];

  return `${who[Math.floor(Math.random() * who.length)]} ${
    action[Math.floor(Math.random() * action.length)]
  } ${what[Math.floor(Math.random() * what.length)]} ${
    when[Math.floor(Math.random() * when.length)]
  }`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
