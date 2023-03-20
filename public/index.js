const likeBtns = document.querySelectorAll(".like-btn");
const dislikeBtns = document.querySelectorAll(".dislike-btn");
const deleteBtns = document.querySelectorAll(".delete-btn");

// this handles the add and remove like. we just pass in the specific URL in the eventlistener call
async function handleLikes(url) {
 const birthName = this.parentNode.childNodes[1].innerText;
 const rapperName = this.parentNode.childNodes[5].innerText;
 const currentLikes = Number(this.parentNode.childNodes[7].innerText);

 try {
  const response = await fetch(url, {
   method: "put",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    birthName: birthName,
    rapperName: rapperName,
    likes: currentLikes,
   }),
  });
  const data = await response.json();
  console.log(data);
  location.reload();
 } catch (e) {
  console.log(e);
 }
}

async function deleteRapper() {
 const rapperName = this.parentNode.childNodes[5].innerText;
 try {
  const response = await fetch("/deleteRapper", {
   method: "delete",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    rapper: rapperName,
   }),
  });
  const data = await response.json();
  console.log(data);
  location.reload();
 } catch (e) {
  console.log(e);
 }
}

Array.from(likeBtns).forEach((btn) => {
 btn.addEventListener("click", function () {
  handleLikes.bind(this)("/addLike");
 });
});

Array.from(dislikeBtns).forEach((btn) => {
 btn.addEventListener("click", function () {
  handleLikes.bind(this)("/removeLike");
 });
});

Array.from(deleteBtns).forEach((btn) => {
 btn.addEventListener("click", deleteRapper);
});
