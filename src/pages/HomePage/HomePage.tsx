import { FC } from "react";

import HomeModule from "@modules/HomeModule";
import { MainLayout } from "@layouts";

const HomePage: FC = () => (
  <MainLayout>
    <HomeModule />
  </MainLayout>
);

export default HomePage;
