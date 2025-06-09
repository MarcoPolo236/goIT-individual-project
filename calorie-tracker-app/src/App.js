import Loader from "./Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Hides loader after 3 seconds
  }, []);

  return (
    <div>
      {loading ? <Loader loading={loading} /> : <h1>Welcome to My App</h1>}
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
    </div>
  );
}

export default App;
