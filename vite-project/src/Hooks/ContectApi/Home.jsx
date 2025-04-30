import { useBioContext } from './Index';

const Home = () => {
 const {myName,myAge}=useBioContext()
  return (
    <div>
      <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center item-center bg-gray-900  text-center`}> 

      <h1 style={{color:"whitesmoke"}}>Hello context api , my name is {myName} {myAge}</h1>

      </section>
    </div>
  );
};

export default Home;
