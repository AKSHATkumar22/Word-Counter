let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
  let text = this.value;
  let char = text.length;

  document.getElementById("char").innerHTML = char;

  text = text.trim();
  let cleanlist = words.filter(function (elm) {
    return elm != "";
  });
  let words = text.split(" ");
  document.getElementById("word").innerHTML = cleanlist.length;
});
