import "./App.css";

function App() {
  return (
    <>
      <Text text="Hello World" />
      <Text text="what is your name?" />
    </>
  );
}

function Text({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default App;
