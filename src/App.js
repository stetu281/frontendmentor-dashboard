import { User } from './components/User';
import { ActivityCard } from './components/ActivityCard';
import data from './assets/data/data.json';

function App() {

  return (
    <div className="App">
      <main className=" w-full min-h-screen py-20 flex justify-center items-center bg-vd-blue font-rubik text-white">
        <div className="grid gap-y-6 w-11/12 max-w-xl lg:max-w-[1120px] lg:grid-cols-4 lg:grid-rows-2 lg:gap-7">
          <User />
          {
            data.map((item, index) => (
              <ActivityCard activity={data[index]} key={index} id={index} />
            ))
           }
        </div>
      </main>
    </div>
  );
}

export default App;
