import "./App.css";

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="app">

      <aside className="sidebar">

        <div className="logo">

          <h2>VectorFlow</h2>

          <p>AI Pipeline Builder</p>

        </div>

        <PipelineToolbar />

      </aside>

      <main className="workspace">

        <div className="canvas">

          <PipelineUI />

        </div>

        <div className="footer">

          <SubmitButton />

        </div>

      </main>

    </div>
  );
}

export default App;