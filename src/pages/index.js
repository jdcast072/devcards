// ---- 1. Array de tecnologías ----
const technologies = [
  {
    name: "HTML5",
    category: "Frontend",
    description: "Lenguaje de marcado para estructurar contenido web.",
    link: "https://www.svgrepo.com/show/349402/html5.svg",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Lenguaje de estilos para diseñar interfaces web.",
    link: "https://www.svgrepo.com/show/452185/css-3.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Lenguaje de programación para la web.",
    link: "https://www.svgrepo.com/show/452045/js.svg",
  },
  {
    name: "Git",
    category: "Herramientas",
    description: "Sistema de gestión del control de versiones.",
    link: "https://www.svgrepo.com/show/452210/git.svg",
  },
  {
    name: "Linux",
    category: "Sistemas",
    description: "Sistema operativo potente y de código abierto.",
    link: "https://www.svgrepo.com/show/448236/linux.svg",
  },
  {
    name: "Windows",
    category: "Sistemas",
    description:
      "Sistema operativo propiedad de Microsoft, popular entre el usuario común.",
    link: "https://www.svgrepo.com/show/331786/windows-azure.svg",
  },
  {
    name: "Docker",
    category: "Contenedores",
    description: "Plataforma para desarrollar, enviar y ejecutar contenedores.",
    link: "https://www.svgrepo.com/show/448221/docker.svg",
  },
  {
    name: "Kubernetes",
    category: "Orquestación",
    description: "Orquestación de contenedores a gran escala.",
    link: "https://www.svgrepo.com/show/448233/kubernetes.svg",
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "Plataforma en la nube de Amazon Web Services.",
    link: "https://www.svgrepo.com/show/448266/aws.svg",
  },
];

// ---- 2. Referencias al DOM ----

// Modal y formulario de nueva tecnología.
const buttonAddTechnology = document.querySelector(".header__button-add");
const popupNewTechnology = document.querySelector("#popup-add-technology");
const technologyCloseButton = popupNewTechnology.querySelector(".popup__close");
const inputTech = popupNewTechnology.querySelector(".popup__input_type_technology");
const inputCategory = popupNewTechnology.querySelector(".popup__input_type_category");
const inputTechDescription = popupNewTechnology.querySelector(".popup__input_type_description");
const inputImage = popupNewTechnology.querySelector(".popup__input_type_link");
const technologyForm = popupNewTechnology.querySelector(".popup__form");

// Modal y formulario para editar el perfil.
const buttonProfileInfo = document.querySelector(".profile__button-info");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const profileCloseButton = popupEditProfile.querySelector(".popup__close");
const formElement = popupEditProfile.querySelector(".popup__form");
const inputName = popupEditProfile.querySelector(".popup__input_type_name");
const inputCareer = popupEditProfile.querySelector(".popup__input_type_career");
const inputDescription = popupEditProfile.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");
const profileDescription = document.querySelector(".profile__description");

// Modal y formulario para cambiar el avatar.
const buttonAvatar = document.querySelector(".profile__button-edit");
const popupAvatar = document.querySelector("#popup-edit-avatar");
const avatarCloseButton = popupAvatar.querySelector(".popup__close");
const formAvatar = popupAvatar.querySelector(".popup__form");
const inputAvatar = popupAvatar.querySelector(".popup__input_type_avatar");
const profileImage = document.querySelector(".profile__image");
const headerImage = document.querySelector(".header__avatar");

// Modal reutilizado para ampliar imágenes de perfil y de tarjetas.
const popupImage = document.querySelector("#popup-image-card");
const modalPicture = popupImage.querySelector(".popup__image");
const modalCaption = popupImage.querySelector(".popup__caption");
const modalCloseButton = popupImage.querySelector(".popup__close");

// Contadores visibles del perfil.

// Contador de tecnologias o tarjetas existentes
let cardCount = technologies.length; // cantidad actual de tarjetas existentes dentro del array 
const profileTechCount = document.querySelector(".profile__count-tech"); // Referencia a la clase de contador de tecnologías
profileTechCount.textContent = cardCount; // Modificar el valor por texto del contador

// Contador de favoritos
let favoriteCount = 0; // Valor inicial de favoritos
const profileFavoriteCount = document.querySelector(".profile__count-fav"); // Referencia a la clase del texto de favoritos

// Contenedor único de las tarjetas generadas desde JavaScript.
const cardContainer = document.querySelector(".cards__list");

// ---- 3. Funciones generales ----
// Función declarativa como controlador para abrir modal
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

// Función declarativa como controlador para cerrar modal
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// ---- 4. Funciones del perfil ----
// Función declarativa, copiar los datos actuales al formulario de Perfil
function fillProfileForm() {
  // Copiar el contenido visible del perfil en los campos del formulario.
  inputName.value = profileName.textContent;
  inputCareer.value = profileCareer.textContent;
  inputDescription.value = profileDescription.textContent;
}

// Función declarativa, controlador para agregar los datos en los campos del formulario de perfil
function handleOpenEditModal() {
  fillProfileForm();
  openModal(popupEditProfile);
}

// Actualizar los datos visibles del perfil al enviar el formulario.
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCareer.textContent = inputCareer.value;
  profileDescription.textContent = inputDescription.value;

  closeModal(popupEditProfile);
}

// Función declarativa para el cambio de imagen del avatar por medio de un link
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  profileImage.src = inputAvatar.value;
  headerImage.src = inputAvatar.value;
  closeModal(popupAvatar);
}

// Preparar y abrir el modal de la imagen del perfil.
function handleOpenAvatarModal(evt) {
  evt.preventDefault();
  modalPicture.src = profileImage.src;
  modalPicture.alt = profileImage.alt;
  modalCaption.textContent = "Imagen de perfil";
  openModal(popupImage);
}

// ---- 5. Funciones de tarjetas ----

// Actualizar el contador visible de tecnologías.
function handlerCardTechCount(action) {
  if (action === "add") {
    cardCount++;
  }

  if (action === "remove") {
    cardCount--;
  }

  profileTechCount.textContent = cardCount;
}

// Crear una tarjeta a partir del template y conectar sus acciones.
// Se agregan valores predeterminados a los parámetros 
function getCardElement(
  name = "Sin nombre",
  category = "Sin categoria",
  description = "Sin descripción",
  link = "../images/placeholder.jpg",
) {
  // Acceder al elemento id del template e ingresar a la clase de contenedor a clonar
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  //Tomar todo el contenido de template y clonarlo
  const cardElement = cardTemplate.cloneNode(true);

  // Referencias a los elementos que reciben los datos de la tecnología.
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__title");
  const cardCategory = cardElement.querySelector(".card__category");
  const cardDescription = cardElement.querySelector(".card__description");
  // Actualización de los datos con textContent, src y alt apuntando a los parámetros
  cardName.textContent = name;
  cardCategory.textContent = category;
  cardDescription.textContent = description;
  cardImage.src = link;
  cardImage.alt = name;

  // Acceder al botón de favoritos
  const likeButton = cardElement.querySelector(".card__button-like");

  // Cambiar el estado de favorito y mantener su contador actualizado.
  function handlerFavoriteCount() {
    if (likeButton.classList.contains("card__button-like_is-liked")) {
      favoriteCount++;
    } else {
      favoriteCount--;
    }
    profileFavoriteCount.textContent = favoriteCount;
  }

  function handleRemoveFavorite() {
    if (likeButton.classList.contains("card__button-like_is-liked")) {
      favoriteCount--;
    }
    profileFavoriteCount.textContent = favoriteCount;
  }

  likeButton.addEventListener("click", (evt) => {
    evt.currentTarget.classList.toggle("card__button-like_is-liked");
    handlerFavoriteCount();
  });

  const removeButton = cardElement.querySelector(".card__button-remove");
  removeButton.addEventListener("click", (evt) => {
    evt.currentTarget.closest(".card").remove(); // Eliminar tarjeta
    handleRemoveFavorite(); // Llamar al controlador para eliminar de favoritos
    handlerCardTechCount("remove"); // Reducir el contador de tecnologias
  });

  // Abrir el modal con la imagen ampliada de la tarjeta.
  cardImage.addEventListener("click", () => {
    modalPicture.src = cardImage.src;
    modalPicture.alt = cardImage.alt;
    modalCaption.textContent = cardName.textContent;
    openModal(popupImage);
  });
  // Retornar la tarjeta clonada
  return cardElement;
}

// Crear una tarjeta con los datos enviados desde el formulario.
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  // Tomar los datos ingresados en los campos de agregar tarjeta
  renderCard(
    inputTech.value,
    inputCategory.value,
    inputTechDescription.value,
    inputImage.value,
    cardContainer,
  );
  closeModal(popupNewTechnology);
  handlerCardTechCount("add"); // Aumentar contador de tarjetas actuales
}

// Insertar una tarjeta en el contenedor indicado.
function renderCard(name, category, description, link, container) {
  //Declarar variable con los argumentos de la tarjeta
  const cardElement = getCardElement(name, category, description, link); 
  container.prepend(cardElement); // Agregar tarjeta antes del primero elemento secundario
}

// ---- 6. Listeners ----
// Perfil.
profileCloseButton.addEventListener("click", () => {
  closeModal(popupEditProfile);
});

formElement.addEventListener("submit", handleProfileFormSubmit);
buttonProfileInfo.addEventListener("click", handleOpenEditModal);
profileImage.addEventListener("click", handleOpenAvatarModal);
modalCloseButton.addEventListener("click", () => {
  closeModal(popupImage);
});

// Avatar.
buttonAvatar.addEventListener("click", () => {
  openModal(popupAvatar);
});

avatarCloseButton.addEventListener("click", () => {
  closeModal(popupAvatar);
});
formAvatar.addEventListener("submit", handleAvatarFormSubmit);

// Nueva tecnología.
buttonAddTechnology.addEventListener("click", () => {
  openModal(popupNewTechnology);
});
technologyCloseButton.addEventListener("click", () => {
  closeModal(popupNewTechnology);
});
technologyForm.addEventListener("submit", handleCardFormSubmit);

// ---- 7. Renderizado inicial ----

// Generar las nueve tarjetas iniciales exclusivamente desde el array.
technologies.forEach((item) => {
  renderCard(
    item.name,
    item.category,
    item.description,
    item.link,
    cardContainer,
  );
});
