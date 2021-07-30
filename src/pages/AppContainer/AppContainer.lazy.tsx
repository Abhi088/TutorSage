import { lazy } from "react";

const AppContainerLazy = lazy(() => import("./AppContainer.page"));

export default AppContainerLazy;