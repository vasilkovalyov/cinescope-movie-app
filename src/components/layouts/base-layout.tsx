import { Footer } from './footer';
import { Header } from './header/header';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
