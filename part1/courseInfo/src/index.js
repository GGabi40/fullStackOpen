import React from "react";
import { createRoot } from "react-dom/client";

// Se define en indes.js: App como un componente
const Hello = (props) => {
  return (
    <div>
      <p>Hello <strong>{props.name}</strong></p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const weekOver = now.getDay();

  let nameJS = 'Maria';

  return (
    <div>
      <p>Hello, world! It is now {now.toLocaleDateString()}</p>
      <p>{4 - weekOver} weeks left until the end of the month.</p>

      <Hello name="Jorge" />
      <Hello name="Brisa" />
      <Hello name={nameJS}/>
    </div>
  );
};

// Renderiza su contenido en el archivo public/index.html
const root = document.getElementById("root");
const rootRender = createRoot(root);
rootRender.render(<App />);
