import "../app/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { QueryClient, QueryClientProvider } from "@react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
