import BasicUsage from "./components/1.useFormStatus/BasicUsage";
import DataUsage from "./components/1.useFormStatus/DataUsage";
import AddToRole from "./components/2.useActionState/forms/add-to-role";
import ProductPage from "./components/ProductPage";
import Content from "./ContextAsProvider/component/content";
import Header from "./ContextAsProvider/component/header";
import ThemeProvider from "./ContextAsProvider/provider/ThemeProvider";
import { foodProducts } from "./data";
const App = () => {
  return (
    // <div className="flex flex-col justify-center items-center">
    /* <ProductPage products={foodProducts} heading="The Food Items " /> */
    /* <BasicUsage /> */
    /* <DataUsage /> */
    // <AddToRole />
    // </div>
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
};
export default App;
