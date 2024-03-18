import {
  Article,
  NoticeBoard,
  LifeAtVit,
  FollowUs,
  Admissions,
  Cards,
  Paths,
} from "../components";

const Home = () => {
  return (
    <div>
      <Article />
      <NoticeBoard />
      <Paths />
      <Admissions />
      <Cards />
      <FollowUs />
      <LifeAtVit />
    </div>
  );
};

export default Home;
