import BasicUsage from "./components/1.useFormStatus/BasicUsage";
import DataUsage from "./components/1.useFormStatus/DataUsage";
import AddToRole from "./components/2.useActionState/forms/add-to-role";
import ProductPage from "./components/ProductPage";
import { foodProducts } from "./data";
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <ProductPage products={foodProducts} heading="The Food Items " /> */}
      {/* <BasicUsage /> */}
      {/* <DataUsage /> */}
      <AddToRole />
    </div>
  );
};
export default App;
