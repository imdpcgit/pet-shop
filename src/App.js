import "./App.css";
import FeaturedIn from "./Containers/FeaturedIn/FeaturedIn";
import TargetSale from "./Containers/TargetSales/TargetSale";
import HomeShopNow from "./Components/HomeShopNow/HomeShopNow";
import NavBar from "./Components/NavBar/NavBar";
import ExploreWorld from "./Containers/ExploreWorld/ExploreWorld";
import UkStore from "./Components/UkStore/UkStore";
import ProductNav from "./Components/ProductNav/ProductNav";
import ReviewRewards from "./Components/ReviewRewards/ReviewRewards";
import ExploreMore from "./Containers/ExploreMore/ExploreMore";
import PetShopFooter from "./Components/PetShopFooter/PetShopFooter";

function App() {
  return (
    <>
      <NavBar />
      <HomeShopNow />
      <TargetSale />
      <FeaturedIn />
      <ExploreWorld />
      <UkStore />
      <ProductNav />
      <ReviewRewards />
      <ExploreMore />
      <PetShopFooter />
    </>
  );
}

export default App;
