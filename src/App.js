import useNetwork from './hooks/useNetwork';
function App() {
  const handleNetworkChange = (online) =>
    console.log(online ? 'Online' : 'Offline');
  const onLine = useNetwork(handleNetworkChange);
  return <div className='App'>{onLine ? 'Online' : 'Offline'}</div>;
}

export default App;
