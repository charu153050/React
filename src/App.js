import "./App.css";

// import LazyLoading from "./Questions/Lazy Loading/LazyLoading";
// import BuggyComponent from "./Questions/Error Boundry/BuggyComponent";
// import ErrorBoundary from "./Questions/Error Boundry/ErrorBoundary";

// import Context from './Questions/Use Context/Context';
// import Reducer from './Questions/Use Reducer/Reducer';

// import CounterUsingCustomHook from './Questions/Custom Hooks/CounterUsingCustomHook';
// import Callback from './Questions/Use Callback/callback';
// import Memo from './Questions/Use Memo/Memo';
import CounterUsingHOC from './Questions/Higher Order Component/CounterUsingHOC'

function App() {
  return (
    <>
      {/* <CounterUsingCustomHook/> */}
      {/* <Memo/> */}
      {/* <Callback/> */}
      {/* <Reducer></Reducer> */}
      {/* <Context/> */}
      {/* <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary> */}
      {/* <LazyLoading/> */}
      <CounterUsingHOC/>
    </>
  );
}

export default App;
