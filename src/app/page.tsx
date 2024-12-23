import dynamic from "next/dynamic";
// import HomePage from "./(pages)/home/index/home";
const HomePage = dynamic(() => import("./(pages)/home/index/home"), {
  ssr: false,
});
const Home = async () => {
  return <HomePage />;
};

export default Home;
