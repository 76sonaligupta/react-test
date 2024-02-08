const addheaddingbyreact = React.createElement("h1", {id:"heading", class:"text"}, "hello, its react first heading",
 [React.createElement("h2", {id:"heading2", class:"text"}, "hello, its react second heading",
 [React.createElement("p", {id:"pera", class:"text"}, "hello, its react first peragraph heading"),
 React.createElement("p", {id:"pera2", class:"text"}, "hello, its react second peragraph heading")])]);
    
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(addheaddingbyreact);

console.log(addheaddingbyreact); 