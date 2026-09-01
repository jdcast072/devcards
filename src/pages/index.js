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
    description: "Sistema operativo propiedad de Microsoft, popular entre el usuario común.",
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

technologies.forEach((item)=>{
  console.log(item.name)
  console.log(item.category)
  console.log(item.description)
  console.log(item.link)
})

const element = document.querySelector(".card");
const likeButton = document.querySelector(".card__button-like");
const removeButton = document.querySelector(".card__button-remove");
let isLiked = false;

likeButton.addEventListener("click", () => {
  isLiked = !isLiked;

  likeButton.classList.toggle("card__button-like_is-liked", isLiked);
});

removeButton.addEventListener("click", () => {
  element.remove();
});
