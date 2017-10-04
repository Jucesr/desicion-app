const app = {
  title: 'Visibility Toogle',
  info: 'This is some secret information',
  buttonText: 'Hide Details',
  buttonState: 0
};

const showDetails = (e) => {
  if( app.buttonState == 0 ){
    app.info = '';
    app.buttonText = 'Show Details';
    app.buttonState = 1;
  }else{
    app.info = 'This is some secret information';
    app.buttonText = 'Hide Details';
    app.buttonState = 0;
  }

  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={showDetails} > {app.buttonText} </button>
      <p> {app.info} </p>
    </div>
  );

  const appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
};

render();
