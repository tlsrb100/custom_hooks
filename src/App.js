import useTabs from './hooks/useTabs';
function App() {
  const content = [
    {
      tab: 'Section 1',
      content: 'I am the content of the Section 1',
    },
    {
      tab: 'Section 2',
      content: 'I am the content of the Section 2',
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className='App'>
      {content.map((section, idx) => (
        <button key={idx} onClick={() => changeItem(idx)}>
          {section.tab}
        </button>
      ))}
      <p>{currentItem.content}</p>
    </div>
  );
}

export default App;
