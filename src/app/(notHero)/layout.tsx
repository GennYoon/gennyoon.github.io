import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" storageKey="blog-ui-theme" enableSystem disableTransitionOnChange>
      <Header />
      <main className="flex flex-col items-center w-full max-w-[1400px] ml-auto mr-auto pt-28">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
