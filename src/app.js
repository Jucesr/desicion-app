console.log('App.js is running');

// JSX - JavaScript XML

const app = {
  title: 'Desicion APP',
  subtitle: 'This app was made to learn React js',
  options: ['One', 'Two']
}

function getOptions(options){
  if(options.length > 0)
    return (
      <ol>
        <li>{options[0]}</li>
        <li>{options[1]}</li>
      </ol>
    );
  return <p>No options</p>
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options && getOptions(app.options)}
  </div>
);
const user = {
  name: 'Julio',
  age: 23,
  location: 'Mexicali'
};

function getLocation() {
  return 'Unknown'
}

const newTemplate = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
