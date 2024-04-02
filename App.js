import React from "react";
import ReactDOM from "react-dom/client";


const headingOld = React.createElement(
  "h1",
  { id: "heading", className: "title" },
  "Hello World from React"
);

const TitleComponent = () =>{
  return (<h2>This is title component</h2>)
}

const heading =(<h1 id="heading" className="title" >
  This is jsx element
  <TitleComponent/>
  </h1>);



const HeadingComponent = () =>{
  return (<div>
    {heading}
    <TitleComponent />
    This is Heading component</div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
