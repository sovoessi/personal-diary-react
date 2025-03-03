import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import EntryModal from "./components/EntryModal";


function App() {
  
  const [showEntry, setShowEntry] = React.useState(false);

  const toggleModal = () => {
    setShowEntry(prev => !prev)
  }

  return (
    <>
      <Header toggleModal={toggleModal}/>
      {showEntry && <EntryModal/>}

      <Main/>
    </>
  )
}

export default App
