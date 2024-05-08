// index.js
import styles from "./styles.css";
// console.log
console.log("styles1", styles);
document.getElementById("app").innerHTML = `
  <div class="${styles.container}">
    <h1>Hello, CSS Modules!</h1>
  </div>
`;
