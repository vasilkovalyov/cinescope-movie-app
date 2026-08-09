import { Logo } from '../../common';
import { HeaderMobileMenu, HeaderNavigation, HeaderStickyWrapper } from './components';

export function Header() {
  return (
    <HeaderStickyWrapper>
      <header className="">
        <div className="container">
          <div className="flex items-center">
            <Logo />
            <nav className="md:ml-[20px] hidden md:block" aria-label="Desktop navigation">
              <HeaderNavigation />
            </nav>
            <div className="md:hidden ml-auto">
              <HeaderMobileMenu />
            </div>
          </div>
        </div>
      </header>
    </HeaderStickyWrapper>
  );
}
