import useInput from './hooks/useInput';
function App() {
  const maxLen = (value) => {
    return value.length <= 10;
  };
  const name = useInput('Mr.Oh', maxLen);

  return (
    <div className='App'>
      <h1>Hello</h1>
      <input placeholder='Name' {...name} />
    </div>
  );
}

export default App;
