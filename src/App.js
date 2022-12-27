import useFullscreen from './hooks/useFullscreen';
function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element: fullScrEl, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div className='App' style={{ height: '1000vh' }}>
      <div ref={fullScrEl}>
        <img src='https://i.ibb.co/R6RwNxx/grape.jpg' alt='grape' />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
