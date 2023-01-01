const $ = document.querySelector.bind(document);

const app = $("#app");

async function start() {
  const r = await (await fetch("http://127.0.0.1:3050")).json();
  r.forEach((e, i) => {
    const div = document.createElement("div");
    div.innerHTML = `${ e.nome } ${ e.cognome }`;
    div.classList.add( 'p-1' );
    if (i % 2 == 0) div.classList.add("bg-gray-1");
    else div.classList.add("bg-gray-2");
    app.append(div);
  });
}

start();
