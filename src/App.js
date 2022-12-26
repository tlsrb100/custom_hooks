import { useRef, useEffect } from 'react';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};
function App() {
  const sayHello = () => {
    console.log('say Hello');
  };
  const title = useClick(sayHello);
  return (
    <div className='App'>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
