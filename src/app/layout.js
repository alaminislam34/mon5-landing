import LanguageProvider from "@/Providers/ContextProvider";
import Navbar from "./components/Header/Navbar";
import "./globals.css";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Mon5Majeur",
  description: "Become the Ultimate Fantasy Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LanguageProvider>
        <body className="bg-dark text-white">
          <header>
            <Navbar />
          </header>
          <main className="overflow-hidden">{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </LanguageProvider>
    </html>
  );
}
