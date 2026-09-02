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
    description: "Sistema de control de versiones distribuido.",
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

// Acceso al botón de: Editar perfil
const buttonProfileInfo = document.querySelector(".profile__button-info");
// Popup: Editar perfil
const popupEditProfile = document.querySelector("#popup-edit-profile");
const closeButton = popupEditProfile.querySelector(".popup__close");
// Acceso al formulario
const formElement = popupEditProfile.querySelector(".popup__form");


// Función declarativa como controlador para abrir modal
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

// Función declarativa como controlador para cerrar modal
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// Función declarativa, copiar los datos actuales al formulario de Perfil
function fillProfileForm() {
  /** 1. Acceder a las clases de los elementos */
  // textContent: Modicar el contenido de texto de la clase accedida
  // Acceso a la clase del nombre del perfil y cambiar el texto del contenido
  const profileName = document.querySelector(".profile__name").textContent;
  // Acceso a la clase del nombre de la profesión
  const profileCareer = document.querySelector(".profile__career").textContent;
  // Acceder a la descripción
  const profileDescription = document.querySelector(".profile__description").textContent;
  /** 2. Acceder a los inputs */
  // Acceder a los campos: Nombre, Profesión y Descripción.
  const inputName = document.querySelector(".popup__input_type_name");
  const CareerInput = document.querySelector(".popup__input_type_career");
  const DescriptionInput = document.querySelector(".popup__input_type_description");
  /** 3. Copiar los datos por value*/
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
function handleProfileFormSubmit(evt){
  evt.preventDefault();
  // 1. Acceder a los campos: Nombre, Profesión y Descripción.
  const inputName = document.querySelector(".popup__input_type_name");
  const CareerInput = document.querySelector(".popup__input_type_career");
  const DescriptionInput = document.querySelector(".popup__input_type_description");
  // 2. Declarar y agregar los valores (value) de los inputs a estas variables
  const valueName = inputName.value;
  const valueCareer= CareerInput.value;
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

// Función expresiva, detector, agregar y copiar los datos al hacer click en el botón de editar perfil
buttonProfileInfo.addEventListener("click", handleOpenEditModal);

// Función expresiva, detector para cerrar modal de editar perfil
closeButton.addEventListener("click", () => {
  closeModal(popupEditProfile);
});

// Función expresiva, detectar para enviar (submit) datos y envio del formulario
formElement.addEventListener("submit", handleProfileFormSubmit);




// const element = document.querySelector(".card");
// const likeButton = document.querySelector(".card__button-like");
// const removeButton = document.querySelector(".card__button-remove");
// let isLiked = false;

// likeButton.addEventListener("click", () => {
//   isLiked = !isLiked;

//   likeButton.classList.toggle("card__button-like_is-liked", isLiked);
// });

// removeButton.addEventListener("click", () => {
//   element.remove();
// });
