import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="container footer-content">
        <p>&copy; 2026 Ahmetcan Bozkurt. Tüm hakları saklıdır.</p>
        <div class="footer-links">
          <a href="#hero">Yukarı Çık</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 40px 0;
      background: var(--bg-dark);
      border-top: 1px solid var(--glass-border);
      text-align: center;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
    }

    p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .footer-links a {
      color: var(--accent-primary);
      font-weight: 600;
      font-size: 0.9rem;
    }

    @media (max-width: 600px) {
      .footer-content {
        flex-direction: column;
        gap: 20px;
      }
    }
  `]
})
export class FooterComponent {}
