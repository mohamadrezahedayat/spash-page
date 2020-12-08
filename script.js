const { body } = document;







function changeBackground(number) {
  body.className = body.className === "" ? `background-${number}` : "";
}
