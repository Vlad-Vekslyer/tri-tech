# Credits: 
Isao Kozakai - Development

Gustavo Rocha Stamm - Development

Nobuyuki Tono - Development

Tatsuya Takarabe - Development

Vladyslav Vekslyer - Development & Design

Yesl Park - Design

Ayako Sayama - Design

# Guidelines:
- ALL component names must be capitalized.
- ALL components should be functional.
- Make your components as reusable as possible.
- Avoid writing page-specific components as much as possible.
- A component's prop types must be put at the end of a component-name.jsx file.
- NEVER push to master. Only send pull requests.

<h2>Client Project Folder Structure:</h2>

`/src/` will contain all the bulk of the businesses logic, i.e components

`/src/components` will contain reusable components directories such as Header.jsx, Footer.jsx

`/src/components/component-name/` will contain the component files

`/src/components/component-name/component-name.jsx` will contain the component code itself.

`/src/components/component-name/component-name.css` will contain the styling of a component.

`/src/views/` will contain wrapper components that represent an entire page.

`/src/views/page-name/` will contain components that only the page requires

`/src/views/page-name/page-name.jsx` will be the wrapper component around any reusable components and page-specific components in the page.

`/src/views/page-name/component-name/` will contain page-specific components

`/src/views/page-name/component-name/component-name.jsx` will be the page-specific component.

`/src/views/page-name/component-name/component-name.css` will contain the component's styling

`/src/App.jsx` will render all of the views components
