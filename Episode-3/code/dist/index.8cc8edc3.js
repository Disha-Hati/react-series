/*
const heading=React.createElement("h1",{},"Hello World from React"); // "element","object that takes attribute in k-v pair","child"
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render replaces everything in root 
*/ //with attributes
/*const heading=React.createElement("h1",
{id:"heading",xyz:"abc"},
"Hello World from React"); // "element","object that takes attribute in k-v pair(props)","child"
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render replaces everything in root
*/ //nesting
/**
 * 
 * <div>
 *      <div>
 *          <h1>I am H1</h1>
 *      </div>
 * </div>
 */ /*const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I am H1")
        )
    )
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent); 
*/ //Nesting + sibling (use array)
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.8cc8edc3.js.map
