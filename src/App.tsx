import { Header } from './components/Header';
import { Content } from './components/Content';
import { ToastProvider } from './contexts/Toast';
import { ToDoContextProvider } from './contexts/ToDo';

function App() {
  
  return (
    <>
      <Header/>
      <ToastProvider>
        <ToDoContextProvider>
          <Content/>
        </ToDoContextProvider>
      </ToastProvider>
    </>
  )
}

export default App
