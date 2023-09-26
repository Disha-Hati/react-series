Class 1 Notes

emmet in VS Code->designed to speed up the process of writing and editing code by providing a set of shortcuts that can be quickly expandable to full code blocks.
-- generates the boiler plate code for us 
--eg. type HTML:5 in a file with .html extension and press enter -> the whole template shows up

Browser doesn't understand React. We need to bring React to our Project. 
One way is via CDN(Content Delivery Network)-> Website where React library has been hosted and we are pulling it using links.

The 2 CDN links has React code written in JS  by Facebook developers.
--react
--react-dom

Why react needs 2 CDN links (react and react-dom) and not one ?
--react just doesn't work on browsers, it works on phone 
--react native and react 3D 
--first link is core react link while second one is bridge to dom

React.createElement is an object. 
React Element(Object) becomes HTML (that browser understands) during rendering 

To create siblings(more than 1 child under same parent), we need to pass using array --react will throw error saying unique "key" prop

JSX-> makes it easy --later episodes(no more use of React.createElement)

Order of the code matters
--we need to import cdn files before app.js 


React will overwrite everything inside "root" and replaces with whatever given inside render 

HW Questions
--What is CDN? Why?
--crossorigin in script tag
--other links in CDN-> react.dev.js vs react.prod.js
--library vs framework
--Why React is known as React?
--async and defer
--Arrow Functions


