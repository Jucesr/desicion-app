'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
  title: 'Desicion APP',
  subtitle: 'This app was made to learn React js',
  options: []
};

function getOptions(options) {
  if (options.length > 0) return React.createElement(
    'ol',
    null,
    app.options.map(function (option) {
      return React.createElement(
        'li',
        { key: option },
        option
      );
    })
  );
  return React.createElement(
    'p',
    null,
    'No options'
  );
}

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }
};

var removeAllOptions = function removeAllOptions(e) {
  app.options = [];
  renderOptions();
};

var onMakeDesicion = function onMakeDesicion() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var user = {
  name: 'Julio',
  age: 23,
  location: 'Mexicali'
};

function getLocation() {
  return 'Unknown';
}

var appRoot = document.getElementById('app');

var renderOptions = function renderOptions() {
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
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDesicion },
      'What should I do? '
    ),
    React.createElement(
      'button',
      { onClick: removeAllOptions },
      'Remove all'
    ),
    app.options && getOptions(app.options),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderOptions();

//Just for scrolling
