import { Products } from "./components/products";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { useFilter } from "./hooks/useFilter";
import { useFetch } from "./api/useFetch";
import { Cart } from "./components/cart";
import { CartProvider } from "./context/cart";

function App() {

  /* productos iniciales */
  const { data } = useFetch("http://fakestoreapi.com/products");

  const { filter, filterProducts } = useFilter();

  // Verificamos que data sea un array antes de asignarlo a products
  const products = Array.isArray(data) ? data : [];

  const filteredProducts = filterProducts(products);

  return (
    <>
    {/* se envuelve el contenido principal con el contexto del carrito */}
    <CartProvider >
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer filter={filter} />
    </CartProvider>
    </>
  );
}

export default App;
