{/* <div id="root">
  <div id="parent"> 
    <h1></h1>
    <h2></h2>
  </div>
</div>; */}

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "title" },
//   "Hello World from React"
// );
const parent = React.createElement('div',{id:'parent'},[React.createElement('h1',{},'H1 Tag'),React.createElement('h2',{},'H2 Tag')]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
