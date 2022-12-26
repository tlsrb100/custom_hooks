import { useState, useEffect } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(() => updateTitle(), [title]);
  return setTitle;
};

function App() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div className='App'>
      <div>Hi</div>
    </div>
  );
}

export default App;
