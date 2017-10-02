'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
  title: 'Desicion APP',
  subtitle: 'This app was made to learn React js',
  options: ['One', 'Two']
};

function getOptions(options) {
  if (options.length > 0) return React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      options[0]
    ),
    React.createElement(
      'li',
      null,
      options[1]
    )
  );
  return React.createElement(
    'p',
    null,
    'No options'
  );
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options && getOptions(app.options)
);
var user = {
  name: 'Julio',
  age: 23,
  location: 'Mexicali'
};

function getLocation() {
  return 'Unknown';
}

var newTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
