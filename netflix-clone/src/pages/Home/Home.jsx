import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import RowList from "../../components/Rows/RowList/RowList";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
