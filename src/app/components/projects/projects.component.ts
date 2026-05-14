import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects" id="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="gradient-text">Seçkin Projeler</h2>
          <div class="underline"></div>
          <p>Yüksek performanslı ve kullanıcı odaklı dijital ürünler.</p>
        </div>

        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="card-inner">
              <div class="project-image">
                <img [src]="project.image" [alt]="project.title">
                <div class="project-overlay">
                  <a [href]="project.link" target="_blank" class="visit-btn">
                    <span>Siteyi Gez</span>
                    <span class="icon">↗</span>
                  </a>
                </div>
              </div>
              <div class="project-info">
                <div class="project-meta">
                  <span class="category">{{project.category}}</span>
                  <div class="delivered-assets">
                     <span *ngFor="let asset of project.assets" class="asset-tag">{{asset}}</span>
                  </div>
                </div>
                <h3>{{project.title}}</h3>
                <p>{{project.description}}</p>
                <div class="tech-stack">
                  <span *ngFor="let tech of project.tech">{{tech}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      background: var(--bg-dark);
      padding: 100px 5%;
    }

    .section-header {
      text-align: center;
      margin-bottom: 80px;
    }

    .section-header h2 {
      font-size: 3.5rem;
    }

    .underline {
      width: 80px;
      height: 4px;
      background: var(--accent-primary);
      margin: 0 auto 20px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 40px;
    }

    .project-card {
      position: relative;
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%);
      border-radius: 35px;
      padding: 1px; /* Border effect */
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .card-inner {
      background: var(--bg-card);
      border-radius: 34px;
      overflow: hidden;
      height: 100%;
    }

    .project-card:hover {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 0 30px 60px rgba(0,0,0,0.6);
      background: linear-gradient(180deg, var(--accent-primary) 0%, transparent 100%);
    }

    .project-image {
      position: relative;
      height: 280px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(5, 5, 5, 0.6);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: all 0.4s;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .visit-btn {
      background: white;
      color: black;
      padding: 15px 30px;
      border-radius: 50px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
      transform: translateY(20px);
      transition: all 0.4s 0.1s;
    }

    .project-card:hover .visit-btn {
      transform: translateY(0);
    }

    .project-info {
      padding: 35px;
    }

    .project-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .category {
      color: var(--accent-primary);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .asset-tag {
      background: rgba(168, 85, 247, 0.1);
      color: var(--accent-secondary);
      font-size: 0.7rem;
      padding: 4px 10px;
      border-radius: 6px;
      margin-left: 5px;
    }

    .project-info h3 {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }

    .project-info p {
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 25px;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tech-stack span {
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--glass-border);
      padding: 6px 14px;
      border-radius: 10px;
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    @media (max-width: 768px) {
      .projects { padding: 80px 20px; }
      .section-header h2 { font-size: 2.5rem; }
      .projects-grid { 
        grid-template-columns: 1fr; 
        gap: 30px;
      }
      .project-info { padding: 25px; }
      .project-info h3 { font-size: 1.5rem; }
      .project-image { height: 220px; }
      .project-overlay { opacity: 1; background: transparent; backdrop-filter: none; position: static; height: auto; padding-top: 15px; }
      .visit-btn { transform: none; width: 100%; justify-content: center; background: var(--accent-primary); color: white; border-radius: 12px; }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Beeses Audio',
      category: 'High-End Ses Teknolojileri',
      description: 'Saf analog güç ve monoblok amplifikatör tasarımları için modern, yüksek performanslı web deneyimi. Marka kimliği ve dijital vitrin tasarımı.',
      image: 'assets/beeses/website.png',
      tech: ['Angular', 'High-End UI', 'Analog Power'],
      link: 'https://beesesaudio.vercel.app/',
      assets: ['Logo Tasarımı', 'Kartvizit']
    },
    {
      title: 'Reconditionare Auto Care',
      category: 'VIP Araç Restorasyonu',
      description: 'Lüks ve klasik araçlar için VIP iç-dış tasarım ve restorasyon hizmetlerini sergileyen premium platform. Çok dilli yapı ve detaylı hizmet katalogu.',
      image: 'assets/reparati-auto/website.png',
      tech: ['Web Design', 'Automotive UI', 'Multilingual'],
      link: 'https://www.reconditionareautocare.ro/',
      assets: ['Logo Tasarımı', 'Kurumsal Kimlik']
    },
    {
      title: 'And Yönetim',
      category: 'Profesyonel Site Yönetimi',
      description: 'Konut siteleri ve tesis yönetimi için güven odaklı kurumsal web çözümü. İdari yönetim ve teknik servis süreçlerinin dijitalleşmesi.',
      image: 'assets/andyonetim/website.png',
      tech: ['Corporate Design', 'Service Management'],
      link: 'https://andyonetim.com.tr/',
      assets: ['Logo Tasarımı', 'Kartvizit & Broşür']
    },
    {
      title: 'Genel Servis İletişim',
      category: 'Teknik Servis Platformu',
      description: 'Beyaz eşya ve klima servisleri için hızlı randevu ve teknik destek odaklı fonksiyonel platform. Marka bazlı servis yönetim yapısı.',
      image: 'assets/genel-servis/website.png',
      tech: ['Functional UI', 'SEO Optimized', 'Fast Booking'],
      link: 'https://genelservisiletisim.com.tr/',
      assets: ['Logo Tasarımı', 'Dijital Pazarlama']
    }
  ];
}
