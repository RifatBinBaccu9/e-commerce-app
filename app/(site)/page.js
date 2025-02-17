import { Save } from "lucide-react";
import BestDeal from "./components/home/bestdeal";
import ComputerAcess from "./components/home/computerAcess";
import Featureproduct from "./components/home/featureproduct";

import Hero from "./components/home/hero";
import Intriducing from "./components/home/intriducing";

import Newsletter from "./components/home/newsletter";
import Shopcategory from "./components/home/shopcategory";
import Saveupto from "./components/home/saveupto";
import Flashsell from "./components/home/flashsell";
import LatestNews from "./components/home/latest";

export default function Home() {
  return (
    <div>
      <Hero />
      <BestDeal />
      <Shopcategory />
      <Featureproduct />
      <Intriducing />
      <ComputerAcess />
      <Saveupto />
      <Flashsell />
      <LatestNews />
      <Newsletter />
    </div>
  );
}
