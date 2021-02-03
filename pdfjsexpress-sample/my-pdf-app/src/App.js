import WebViewer from '@pdftron/pdfjs-express';
import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/pdfjsexpress',
        initialDoc: 'incometaxact.pdf',
      },
      viewer.current,
    ).then((instance) => {

      });
    }
    , []);

  return (
    <div className="App">
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
}

export default App;
