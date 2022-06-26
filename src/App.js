import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div data-testid="wrapper" className="wrapper">
          <div className="float">
            <div data-testid="box" className="box">
              Text cannot overlap with this box.
            </div>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}

export default App;
