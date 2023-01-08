import { Link } from "react-router-dom";

function Home() {
  const avatar = JSON.parse(localStorage.getItem('user'));
  
  return (
    <section>
      <span className="avatar">
        <img src={avatar.avatar} />
      </span>
      <div className='home-background'></div>
      <div className='content flex'>
        <span>
          <h1>Trek</h1>
          <h2>find your next adventure starting from here</h2>
        </span>

        <div className='home-cta flex'>
          <Link to="/bikes">See Bikes</Link>
          <button>Make Reservation</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
