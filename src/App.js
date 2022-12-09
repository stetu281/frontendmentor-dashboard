import { User } from './components/User';

function App() {
  return (
    <div className="App">
      <main className=" w-full h-screen flex justify-center items-center bg-vd-blue font-rubik text-white">
        <div className="grid w-11/12">
          <User />
        </div>
      </main>
    </div>
  );
}

export default App;
