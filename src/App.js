import useConfirm from './hooks/useConfirm';
function App() {
  const deleteWorld = () => console.log('delete the world');
  const abort = () => {
    console.log('aborted');
  };
  const confirmDelete = useConfirm('are you sure?', deleteWorld, abort);
  return (
    <div className='App'>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;
