const clownfish = document.querySelectorAll(".fish-list-card-name");
clownfish[4].innerText = "Clownfish";

const ul = document.querySelector("ul");
const newFish = document.createElement("li");
newFish.id = "fish-9";
newFish.className = "fish-list-card flex-column light";
ul.appendChild(newFish);

const img = document.createElement("img");
img.src = "./images/green-wrasse.jpg";
img.className = "fish-list-card-image";
img.alt = "fish pic";
newFish.appendChild(img);

const newSpan = document.createElement("span");
newSpan.className = "fish-list-card-name";
newSpan.innerText = "Green Wrasse";
newFish.appendChild(newSpan);

const allLi = document.querySelectorAll(".fish-list-card");

for (let i = 0; i < allLi.length; i++) {
  const btn = document.createElement("button");
  btn.className = "bayFish";
  btn.innerText = "Купить";
  btn.style.marginBottom = "20px";
  btn.style.fontSize = "20px";
  allLi[i].appendChild(btn);

  const allLiIndex = allLi[i]
  const allSpan = allLiIndex.querySelector(".fish-list-card-name")
  const allertText = allSpan.innerText;
  console.log(allSpan.innerText);


  btn.addEventListener("click", () => {
      alert(`Вы хотите купить, 🐟  ${allertText}?`);
  });
}
