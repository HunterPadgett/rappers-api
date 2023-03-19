const likeBtns = document.querySelectorAll(".like-btn");
const deleteBtns = document.querySelectorAll(".delete-btn");

async function deleteRapper() {
 const rapperName = this.parentNode.childNodes[5].innerText;
 try {
  const res = await fetch("/deleteRapper", {
   method: "delete",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    rapper: rapperName,
   }),
  });
  const data = await res.json();
  console.log(data);
  location.reload();
 } catch (e) {
  console.log(e);
 }
}

Array.from(deleteBtns).forEach((btn) => {
 btn.addEventListener("click", deleteRapper);
});
