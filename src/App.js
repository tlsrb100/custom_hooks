import useFadeIn from './hooks/useFadeIn';
function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className='App'>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>tlsrb11100</p>
    </div>
  );
}

export default App;
