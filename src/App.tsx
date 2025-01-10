import './App.css'
import CodeEditor from './components/CodeEditor'
function App() {
  return (
    <div>
      <header className='bg-[#1e0738] border-b-[1px] h-10 md:h-16 w-full flex justify-center items-center py-3 px-2'>
        <nav>
          <a href="https://codingminutes.com/">
            <p className='text-white text-4xl bg-black border border-white rounded-md'>
              SHRIGANESH (the JODD) CODES
            </p>
          </a>
        </nav>
      </header>
      <div className='flex bg-[#1e0738] py-2 lg:h-[91.4vh]'>
        <CodeEditor />
      </div>
    </div>
  )
}

export default App
