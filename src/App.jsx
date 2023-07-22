import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProviver";
import { MainLayout } from "./layouts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <CartProvider>
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </CartProvider>
        </DrinksProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}

export default App;
