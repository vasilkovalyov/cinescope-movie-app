import { Footer } from './footer';
import { Header } from './header';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <main className="flex-grow">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
