import LanguageProvider from "@/Providers/ContextProvider";
import Navbar from "./components/Header/Navbar";
import "./globals.css";

export const metadata = {
  title: "Mon5Majeur",
  description: "Become the Ultimate Fantasy Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className="bg-dark text-white">
          <header>
            <Navbar />
          </header>
          <main className="overflow-hidden ">{children}</main>
        </body>
      </LanguageProvider>
    </html>
  );
}
