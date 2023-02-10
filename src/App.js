import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Software Developer</h1>
      </header>
      <br />
      <div className="row">
        <div className='col-md-3 col-9 offset-2 offset-md-1'>
          <img src={process.env.PUBLIC_URL + "favicon.png"} height={300} alt="Dream->code->Achieve"/>
        </div>
        <ul className="col-md-6 col-10 offset-1">
          <li>👋 Hi, I’m Nimitha J, a passinate Software developer.</li>
          <li>👀 I’m interested in solving problems, learning different technologies and teckstacks.</li>
          <li>🌱 I’m currently learning best coding practices and System design :)</li>
          <li>✨ I am continually inspired by the limitless potential of software development to bring ideas to life.</li>
          <li>☕ I enjoy coding while sipping on a cup of tea.</li>
        </ul>

      </div>

    </div>
  );
}

export default App;
