import "$styles/index.css";
import "$styles/syntax-highlighting.css";

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}";

// Import third-party libs.
import { annotate, annotationGroup } from "rough-notation";

console.info("Bridgetown is loaded!");

// Animate annotations.
const softwareText = document.querySelector("#text-software");
const softwareAnnotation = annotate(softwareText, {
  type: "underline",
  color: "#f9d423",
});
const startupsText = document.querySelector("#text-startups");
const startupsAnnotation = annotate(startupsText, {
  type: "underline",
  color: "#00ff00",
});

const conversationalText = document.querySelector("#text-conversational");
const conversationalAnnotation = annotate(conversationalText, {
  type: "bracket",
  color: "#00ffff",
});

const nameText = document.querySelector("#text-name");
const nameAnnotation = annotate(nameText, {
  type: "highlight",
  color: "rgba(255, 0, 255, 0.1)",
});
const voxableText = document.querySelector("#text-voxable");
const voxableAnnotation = annotate(voxableText, {
  type: "highlight",
  color: "rgba(255, 0, 255, 0.1)",
});

const ag = annotationGroup([
  softwareAnnotation,
  startupsAnnotation,
  conversationalAnnotation,
  nameAnnotation,
  voxableAnnotation,
]);
ag.show();
