import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProviver";
import { UserProvider } from "./context/UserProvider";
import { MainLayout } from "./layouts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <UserProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <CartProvider>
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </CartProvider>
        </DrinksProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}

export default App;
