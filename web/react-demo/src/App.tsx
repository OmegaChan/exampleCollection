import React from 'react';
import { useRouterConfig } from './routes';


function App() {
  const { element } = useRouterConfig();
  return (
    <>
      <div>子应用-react</div>
      {
        element
      }
    </>
  )
}

export default App
