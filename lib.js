export function out(t) {
  const txt = typeof t === 'string' ? t : JSON.stringify(t, null, 2);
  const txtNode = document.createTextNode(txt);
  const pre = document.createElement('pre');
  pre.className = 'alert';
  pre.appendChild(txtNode);
  document.getElementById('root').appendChild(pre);
}

export function button(txt, callback) {
  const div = document.createElement('div');
	const btn = document.createElement('button');
	btn.appendChild(document.createTextNode(txt));
  btn.onclick = callback;
  div.appendChild(btn);
  div.className = 'alert';
  document.getElementById('root').appendChild(div);
}