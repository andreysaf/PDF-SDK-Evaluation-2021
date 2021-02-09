import './App.css';

function App() {
  return (
    <div className="App">
      <iframe
        id="pdf-js-viewer"
        src="lib/web/viewer.html?file=../../sample.pdf"
        title="webviewer"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default App;
