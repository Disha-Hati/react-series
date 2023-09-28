In Episode 1, whatever code we wrote, it had unneccesary files and comments. It is NOT Production ready

To make our app production ready, we need to:
    - minify our file 
    - compress and bundle
    - need a server to run things 

Minify => Optimization => Clean Console => Bundle

We need lot of packages other than React to make it fast.

npm
-- npm doesn't have a full form
-- It manages node packages but stands for Nodes Package Manager
-- npm is a standard repo for all packages, libraries and utilities.
-- create react app has npm already
-- we can use package manager called yarn as well

>>> npm init / npm init -y -> this answers yes to all set of Questions and skip them
    --set of questions
    --we'll use jest for testing
After answering all questions when we press enter,-> a package.json file is added

package.json is a configuration for npm. It has dependancies.

Bundler
-- allows developers to package their code into single file or bundle. 
--eg. Webpack, vite, parcel

-we will use parcel 

create-react-app uses webpack and babel.

>>> npm install -D parcel 
--D is dev dependancies

dev dependancy vs normal dependancy 

package-lock.json and node_modules is added. 
package-lock.json keeps record of every version of the dependancies. 
The integrity keeps a hash so everything that works in our local system works in production as well.
* never modify package-lock.json
node_modules has all the data that our package needs. 

caret(^) vs tilde(~) in version :
^ -> will update to all future minor/patch versions. This is default.
~ -> major updates. Used for bug fixes. 

Transitive Dependancies
Our project needs parcel -> parcel as a project has it's own dependancies-> those dependancies can have their own dependancies.
This is why node_modules has so many files 

How many package.json and package-lock.json in our project?
- Every project under node_modules have their own set of configuration in package.json and package-lock.json

.gitignore -> whatever we don't need to push in git
-- package.json and package-lock.json has all dependancies. It should be in github. It can regenerate node_modules.

--- Try deleting node_modules-> we can reinstall node_modules using >>> npm install -> package.json and package-lock.json creates node_modules.

>>> npx parcel index.html  -> starts server in localhost:1234 (x-> execute)

-- deleting cdn links and bringing via npm 
-- cdn links are too costly as it makes calls. We'll have to keep changing links when version changes.
>>> npm install react
>>>npm install react-dom

If we run after installing npm , it gives error -> 'react is not defined'
-- This is because we have just installed the package, we neeed to import react from node_modules called react.
-- still gives error -> 'Browser scripts cannot have imports or exports'
--we have to specify to the browser that we're not using a normal script tag but a module.
--<script type="module" src="app.js"></script>

Features of Parcel:
-Dev Build
-Local Server
-Hot Module Replacement(HMR)->automatically refreshes our page . Parcel uses a file watching algorithm written in C++. It does caching, so it gives faster builds. 
 -Caching- Faster Builds (.parcel-cache has binary files)
 -Image Optimization
 -Minification
 -Bundling
 -Compressing
 -Consistent Hashing
 -Code Spliting
 -Diagonistic
 --Error Handling
 -HTTPS
 -Differntial Bundling - support older browsers
 -Tree Shaking- removes unused codes
 -different dev and prod bundles

For Prod build 
 >>> npx parcel build index.html
 -gives error
 -we have main:"app.js" in package.json -> remove this
 - now , it does a lot of things, minify and compress our file. Parcel will build all the production files to dist folder- everything comes from .parcel-cache and dist folder

--.parcel-cache and dist folder can be regenerated -> so put in .gitignore

BrowsersList 
-There is a package called 'browserlist' and Parcel automatically gives it to us.
-Browserlist makes our code compatible for a lot of browsers.
-we can add 'browserslist':[ , , ] in package.json






