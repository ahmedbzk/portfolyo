import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header [class.scrolled]="isScrolled">
      <div class="container header-content">
        <div class="logo">PORT<span>FOLYO</span></div>
        <nav>
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

    @media (max-width: 768px) {
      nav { display: none; }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}
