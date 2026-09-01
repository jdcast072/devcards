

const element = document.querySelector('.card');
const likeButton = document.querySelector(".card__button-like");
const removeButton = document.querySelector(".card__button-remove");
let isLiked = false;

likeButton.addEventListener("click", () => {
  isLiked = !isLiked;

  likeButton.classList.toggle("card__button-like_is-liked", isLiked);
});

removeButton.addEventListener("click", () => {
    element.remove();
    element = null;
});