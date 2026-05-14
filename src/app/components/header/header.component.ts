import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header [class.scrolled]="isScrolled" [class.menu-open]="isMenuOpen">
      <div class="container header-content">
        <div class="logo">PORT<span>FOLYO</span></div>
        
        <!-- Mobile Menu Toggle -->
        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle Menu">
          <div class="bar" [class.open]="isMenuOpen"></div>
        </button>

        <nav [class.open]="isMenuOpen">
          <ul>
            <li><a href="#hero" (click)="scrollToSection($event, 'hero')">Ana Sayfa</a></li>
            <li><a href="#about" (click)="scrollToSection($event, 'about')">Hakkımda</a></li>
            <li><a href="#projects" (click)="scrollToSection($event, 'projects')">Projeler</a></li>
            <li><a href="#assets" (click)="scrollToSection($event, 'assets')">Tasarımlar</a></li>
            <li><a href="#contact" (click)="scrollToSection($event, 'contact')">İletişim</a></li>
          </ul>
        </nav>
        <div class="cta">
          <a href="#contact" (click)="scrollToSection($event, 'contact')" class="btn-primary">Teklif Al</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 20px 0;
      transition: var(--transition-fast);
      background: transparent;
      border-bottom: 1px solid transparent;
    }

    header.scrolled {
      padding: 15px 0;
      background: rgba(5, 5, 5, 0.8);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid var(--glass-border);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
    }

    .logo {
      font-family: 'Outfit', sans-serif;
      font-size: 1.7rem;
      font-weight: 800;
      letter-spacing: 1px;
      cursor: pointer;
      z-index: 1001;
    }

    .logo span {
      color: var(--accent-primary);
      background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: 35px;
    }

    nav ul li a {
      font-weight: 500;
      font-size: 0.95rem;
      color: var(--text-muted);
      position: relative;
      transition: var(--transition-fast);
    }

    nav ul li a:hover {
      color: var(--text-main);
    }

    nav ul li a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--accent-primary);
      transition: var(--transition-fast);
      transform: translateX(-50%);
    }

    nav ul li a:hover::after {
      width: 100%;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      padding: 12px 28px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
      70% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
      100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
    }

    .menu-toggle {
      display: none;
      width: 40px;
      height: 40px;
      position: relative;
      z-index: 1001;
      justify-content: center;
      align-items: center;
    }

    .bar {
      width: 25px;
      height: 2px;
      background: white;
      position: relative;
      transition: 0.3s;
    }

    .bar::before, .bar::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      left: 0;
      transition: 0.3s;
    }

    .bar::before { top: -8px; }
    .bar::after { bottom: -8px; }

    .bar.open { background: transparent; }
    .bar.open::before { transform: rotate(45deg); top: 0; }
    .bar.open::after { transform: rotate(-45deg); bottom: 0; }

    @media (max-width: 768px) {
      .menu-toggle { display: flex; }
      
      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background: var(--bg-dark);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1000;
        box-shadow: -10px 0 30px rgba(0,0,0,0.5);
      }

      nav.open { right: 0; }

      nav ul {
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      nav ul li a {
        font-size: 1.5rem;
      }

      .cta { display: none; }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
