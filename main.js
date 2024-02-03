let docfragment = new DocumentFragment();
let elWrapper = document.querySelector(".poke-list");

const renderListPoke = (pokes, wrapper) => {
  let clonedtemplate = document.querySelector(".poke-template").content;
  let slicedPokes = pokes.slice(0, 44);

  slicedPokes.forEach((poke) => {
    let template = clonedtemplate.cloneNode(true);

    template.querySelector(".poke-img").src = poke.img;
    template.querySelector(".poke-name").textContent = poke.name;
    template.querySelector(
      ".poke-overview"
    ).textContent = `poke time release: ${poke.spawn_time}`;
    template.querySelector(
      ".poke-type"
    ).textContent = `poke type:${poke.type.join(", ")}`;

    docfragment.appendChild(template);
  });
  wrapper.appendChild(docfragment);
};
renderListPoke(pokemons, elWrapper);
