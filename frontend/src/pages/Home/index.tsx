import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home page </div>
      <button type="button" className="btn btn-primary">
        <Link to="/login">Home</Link>
      </button>
    </>
  );
}

export default Home;
