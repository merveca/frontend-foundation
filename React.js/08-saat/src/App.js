import ExternalJS from "./component/mnt1/ExternalJS";
import Hello from "./component/mnt1/Hello";
import Inline from "./component/mnt1/Inline";
import Internal from "./component/mnt1/Internal";
import Clock2 from "./component/mnt3/Clock2";
import Review from "./component/review/Review";
import Slider from "./component/slider/Slider";
function App() {
  return (
    <div className="App">
      {/* <Hello />
      <Inline />
      <Internal />
      <ExternalJS /> 
      <Review />
      <Slider />*/}
      <Clock2 yaziRengi="yellow" zeminRengi="grey" />
    </div>
  );
}

export default App;
