const defineCss = () => {
  return `<style>
        body{
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #18122B;
        }
        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    </style>`;
};

const defineHTML = () => {
  return `<div class="content">
    <img src="https://media.istockphoto.com/id/1387615878/photo/back-to-work-concept-of-text-on-color-cards-top-view-image-of-cards-and-on-pastel-beige.jpg?b=1&s=170667a&w=0&k=20&c=EcCJfGRu7F4-5-yTDZXlL-C5WoAXwhIONAutO1MNZxc=">
    </div>`;
};

const forbiddenUrls = [
    "web.facebook.com",
    "www.instagram.com",
    "twitter.com",
    "www.youtube.com"
];
const set = new Set(forbiddenUrls);

if (set.has(window.location.hostname)) {
  document.head.innerHTML = defineCss();
  document.body.innerHTML = defineHTML();
}
