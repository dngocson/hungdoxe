import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./components/_UI/Header";
import { mock_headerData } from "./constants/mockData";
import Footer from "./components/_UI/Footer";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header data={mock_headerData} />
      <Outlet />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}
