import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import FilterTask from "./components/FilterTask";
import NewTask from "./components/NewTask";
import VisibilityFilterList from "./components/VisibilityFilterList";
import Dog from "./components/Dog";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">To Do App</h1>
      <FilterTask />
      <NewTask />
      <VisibilityFilterList />
      <Dog />
    </div>
  );
}

export default App;
