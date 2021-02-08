import './App.css';
import { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer',
        initialDoc: 'sample.pdf',
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
