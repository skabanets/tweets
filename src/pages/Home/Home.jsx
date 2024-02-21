import s from './Home.module.css';
import heroImage1x from '../../assets/images/hero-image@1x.webp';
import heroImage2x from '../../assets/images/hero-image@2x.webp';

const Home = () => {
  return (
    <div className="pageWrapper">
      <div className={s.hero}>
        <h1 className="title">Welcome to our Tweets Feed!</h1>
        <img
          className={s.heroImage}
          srcSet={`${heroImage1x} 1x, ${heroImage2x} 2x`}
          src={heroImage1x}
          alt="card image"
        />
        <p className="text">
          Welcome to our home page where you can dive into the latest tweets from various users.
          Stay connected, stay informed, and engage with a diverse range of voices. Follow your
          favorite personalities, keep up with trending topics, and explore new perspectives.
        </p>
      </div>
      <div className={s.section}>
        <h2 className="title">Why Follow Us?</h2>
        <ul className={s.sectionList}>
          <li>Stay Updated: Get real-time updates on news, events, and trends.</li>
          <li>Connect: Engage with other users and build meaningful connections.</li>
          <li>Explore: Discover new ideas, interests, and conversations.</li>
          <li>Interact: Like, retweet, and reply to tweets that resonate with you.</li>
        </ul>
      </div>
      <div className={s.section}>
        <h2 className="title">How It Works:</h2>
        <ul className={s.sectionList}>
          <li>Explore: Browse through a variety of profiles and tweets.</li>
          <li>Follow: Hit the follow button to stay connected with your favorite users.</li>
          <li>Stay Informed: Watch your feed fill up with tweets from the users you follow.</li>
        </ul>
      </div>
      <div className={s.section}>
        <h2 className="title">Join the Conversation:</h2>
        <p className="text">
          Our platform is a hub for lively discussions, valuable insights, and shared experiences.
          Whether you're a casual observer or an active participant, there's something for everyone.
        </p>
      </div>
    </div>
  );
};

export default Home;
