import { FC } from "react";

import HomePage from "@pages/HomePage";
import { RootLayout } from "@layouts";

const App: FC = () => (
  <RootLayout>
    <HomePage />
  </RootLayout>
);

export default App;
