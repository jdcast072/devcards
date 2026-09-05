// ---- 1. Array de datos ----
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

// technologies.forEach((item) => {
//   console.log(item.name);
//   console.log(item.category);
//   console.log(item.description);
//   console.log(item.link);
// });

// ---- 2. Referencias al DOM ----
// Acceso al botón de: Editar perfil
const buttonProfileInfo = document.querySelector(".profile__button-info");
// Popup: Editar perfil
const popupEditProfile = document.querySelector("#popup-edit-profile");
const profileCloseButton = popupEditProfile.querySelector(".popup__close");
// Acceso al formulario
const formElement = popupEditProfile.querySelector(".popup__form");

// Acceso al botón de: Nueva Tecnología
const buttonAddTechonolgy = document.querySelector(".header__button-add");
const popupNewTechnology = document.querySelector("#popup-add-technology");
const TechCloseButton = popupNewTechnology.querySelector(".popup__close");
//Acceso a los inputs de: Nueva tecnología; ir a la función controladora handleCardFormSubmit.
const inputTech = popupNewTechnology.querySelector(".popup__input_type_technology"); 
const inputCategory = popupNewTechnology.querySelector(".popup__input_type_category"); 
const inputDescription = popupNewTechnology.querySelector(".popup__input_type_description"); 
const inputImage = popupNewTechnology.querySelector(".popup__input_type_link"); 
const addCardTech = popupNewTechnology.querySelector(".popup__form");

// Acceso al botón de: Foto de Avatar
const buttonAvatar = document.querySelector(".profile__button-edit");
const popupAvatar = document.querySelector("#popup-edit-avatar");
const avatarCloseButton = popupAvatar.querySelector(".popup__close");
const formAvatar = popupAvatar.querySelector(".popup__form");

// Variable que accede al contenedor en donde se encuentran las tarjetas
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
  /** 1. Acceder a las clases de los elementos */
  // textContent: Modicar el contenido de texto de la clase accedida
  // Acceso a la clase del nombre del perfil y cambiar el texto del contenido
  const profileName = document.querySelector(".profile__name").textContent;
  // Acceso a la clase del nombre de la profesión
  const profileCareer = document.querySelector(".profile__career").textContent;
  // Acceder a la descripción
  const profileDescription = document.querySelector(
    ".profile__description",
  ).textContent;

  /** 2. Acceder a los inputs */
  // Acceder a los campos: Nombre, Profesión y Descripción.
  const inputName = document.querySelector(".popup__input_type_name");
  const CareerInput = document.querySelector(".popup__input_type_career");
  const DescriptionInput = document.querySelector(".popup__input_type_description");

  /** 3. Copiar los datos por value */
  inputName.value = profileName;
  CareerInput.value = profileCareer;
  DescriptionInput.value = profileDescription;
}

// Función declarativa, controlador para agregar los datos en los campos del formulario de perfil
function handleOpenEditModal() {
  fillProfileForm();
  openModal(popupEditProfile);
}

// Función declarativa, actualizaar datos al enviarlos dentro del formulario perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // 1. Acceder a los campos: Nombre, Profesión y Descripción.
  const inputName = document.querySelector(".popup__input_type_name");
  const CareerInput = document.querySelector(".popup__input_type_career");
  const DescriptionInput = document.querySelector(".popup__input_type_description");

  // 2. Declarar y agregar los valores (value) de los inputs a estas variables
  const valueName = inputName.value;
  const valueCareer = CareerInput.value;
  const valueDescription = DescriptionInput.value;

  // 3. Acceder a la clase de Nombre, Profesión y Descripción del perfil para actualizar los datos
  const profileName = document.querySelector(".profile__name");
  const profileCareer = document.querySelector(".profile__career");
  const profileDescription = document.querySelector(".profile__description");

  // 4. Ingresar los nuevos datos en los campos y ver actualizado los datos de profile
  profileName.textContent = valueName;
  profileCareer.textContent = valueCareer;
  profileDescription.textContent = valueDescription;

  closeModal(popupEditProfile);
}

function handleAvatarFormSubmit(evt){
  evt.preventDefault();
  const inputLink = document.querySelector('.popup__input_type_avatar');
  const valueLink = inputLink.value;
  const profileImage = document.querySelector(".profile__image");
  const headerImage = document.querySelector(".header__avatar");
  profileImage.src = valueLink;
  headerImage.src = valueLink;
  closeModal(popupAvatar);
}

// ---- 5. Función de creación de tarjetas ----
// Función declarativa, retornas las tarjetas a partir del template card
function getCardElement(name, category, description, link) {
  // Clonar el template
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");

  const cardElement = cardTemplate.cloneNode(true);

  // Acceder a las clases de los elementos del template que se van a personalizar y copiar
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__title");
  const cardCategory = cardElement.querySelector(".card__category");
  const cardDescription = cardElement.querySelector(".card__description");

  // Clonar según los parámetros que se van a pasar como argumentos
  cardName.textContent = name;
  cardCategory.textContent = category;
  cardDescription.textContent = description;
  cardImage.src = link;
  cardImage.alt = name;

  const likeButton = cardElement.querySelector(".card__button-like");
  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__button-like_is-liked");
  });

  const removeButton = cardElement.querySelector(".card__button-remove");
  removeButton.addEventListener("click", (evt) => {
    evt.target.closest(".card").remove();
  });

  return cardElement;
}
// Función declarativa, controlador para agregar nueva tarjeta con datos.
function handleCardFormSubmit(evt){
  evt.preventDefault();
  // Reutlización de la función renderizada 
  renderCard(inputTech.value, inputCategory.value, inputDescription.value,
    inputImage.value, cardContainer);
    closeModal(popupNewTechnology);
}

//Función expresiva, retornar y renderizar las tarjetas del array establecido
function renderCard(name, category, description, link, container) {
  const cardElement = getCardElement(name, category, description, link);
  container.prepend(cardElement);
}

// ---- 6. Listeners de los popups ----
/** Modal de edición del perfil */

// Función expresiva, detector para cerrar modal de editar perfil
profileCloseButton.addEventListener("click", () => {
  closeModal(popupEditProfile);
});

// Función expresiva, detectar para enviar (submit) datos y envio del formulario
formElement.addEventListener("submit", handleProfileFormSubmit);

// Función expresiva, detector, agregar y copiar los datos al hacer click en el botón de editar perfil
buttonProfileInfo.addEventListener("click", handleOpenEditModal);

/** ---- */

/** Modal edición de foto de avatar */
buttonAvatar.addEventListener("click", () => {
  openModal(popupAvatar);
});

avatarCloseButton.addEventListener("click", () => {
  closeModal(popupAvatar);
});
// Función expresiva, detector para cambiar la foto de perfil
formAvatar.addEventListener("submit", handleAvatarFormSubmit);

/** ---- */

/** Modal de edición de la tarjeta */

// Función expresiva, detector para abrir modal de Nueva tecnología
buttonAddTechonolgy.addEventListener("click", () => {
  openModal(popupNewTechnology);
});
// Función expresiva, detector para cerrar modal de Nueva tecnología
TechCloseButton.addEventListener("click", () => {
  closeModal(popupNewTechnology);
});

addCardTech.addEventListener("submit",handleCardFormSubmit)

/** ---- */

// ---- 7. Renderizado inicial ----

// Función expresiva callback para recorrer el array y sus objetos. 
technologies.forEach((item) => {
  renderCard(item.name, item.category, item.description, item.link, cardContainer);
});