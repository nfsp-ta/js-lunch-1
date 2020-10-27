export function out(t) {
  const txt = typeof t === "string" ? t : JSON.stringify(t, null, 2);
  const txtNode = document.createTextNode(txt);
  const pre = document.createElement("pre");
  pre.className = "alert";
  pre.appendChild(txtNode);
  document.getElementById("root").appendChild(pre);
}
