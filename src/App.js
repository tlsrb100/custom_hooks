import useAxios from './hooks/useAxios';
function App() {
  const { loading, error, data, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  console.log(loading, error, data);
  return (
    <div className='App' style={{ height: '1000vh' }}>
      <h1>status는 {data && data.status}</h1>
      <h2>{loading ? 'is loading...' : 'is loaded'}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;
