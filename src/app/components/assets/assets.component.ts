import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="assets" id="assets">
      <div class="container asset-layout">
        <div class="asset-sidebar">
          <div class="section-header">
            <h2 class="gradient-text">Tasarım<br>Arşivi</h2>
            <div class="underline"></div>
            <p>Marka kimliği ve dijital varlık tasarımları.</p>
          </div>

          <div class="filter-vertical">
            <button 
              *ngFor="let cat of categories" 
              [class.active]="activeCategory === cat"
              (click)="setCategory(cat)">
              <span class="dot"></span>
              {{cat}}
            </button>
          </div>
        </div>

        <div class="asset-main">
          <div class="category-info" *ngIf="activeCategory !== 'Hepsi'">
            <h3 class="category-title">{{activeCategory}} Tasarımları</h3>
            <p class="category-desc">{{getCategoryDescription()}}</p>
          </div>

          <div class="assets-grid">
            <div class="asset-item" *ngFor="let asset of filteredAssets()" [class.logo-item]="asset.type === 'Logo'">
              <div class="asset-card">
                <div class="asset-image" [class.contain]="asset.type !== 'Site'" (click)="openLightbox(asset.image)">
                  <img [src]="asset.image" [alt]="asset.name">
                  <div class="asset-badge">{{asset.type}}</div>
                  <div class="image-overlay">
                    <span class="zoom-icon">🔍 Büyüt</span>
                  </div>
                </div>
                <div class="asset-details">
                  <div class="detail-header">
                    <h3>{{asset.name}}</h3>
                    <a *ngIf="asset.link" [href]="asset.link" target="_blank" class="visit-btn-small" (click)="$event.stopPropagation()">
                      Gez ↗
                    </a>
                  </div>
                  <p>{{asset.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div class="lightbox" *ngIf="selectedImage" (click)="closeLightbox()">
        <div class="lightbox-content" (click)="$event.stopPropagation()">
          <img [src]="selectedImage" alt="Büyük Görsel">
          <button class="close-btn" (click)="closeLightbox()">&times;</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .assets {
      background: var(--bg-dark);
      padding: 120px 5%;
      min-height: 100vh;
    }

    .asset-layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 60px;
      align-items: start;
    }

    .asset-sidebar {
      position: sticky;
      top: 120px;
    }

    .section-header {
      text-align: left;
      margin-bottom: 40px;
    }

    .section-header h2 {
      font-size: 3.5rem;
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .underline {
      width: 60px;
      height: 4px;
      background: var(--accent-primary);
      margin-bottom: 20px;
    }

    .filter-vertical {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .filter-vertical button {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 15px 20px;
      text-align: left;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 15px;
      transition: all 0.3s;
      border-radius: 15px;
    }

    .filter-vertical button .dot {
      width: 8px;
      height: 8px;
      background: var(--glass-border);
      border-radius: 50%;
      transition: all 0.3s;
    }

    .filter-vertical button.active {
      color: white;
      background: var(--glass);
    }

    .filter-vertical button.active .dot {
      background: var(--accent-primary);
      box-shadow: 0 0 15px var(--accent-primary);
      transform: scale(1.5);
    }

    .category-info {
      margin-bottom: 40px;
      padding: 30px;
      background: var(--glass);
      border-radius: 25px;
      border-left: 5px solid var(--accent-primary);
    }

    .category-title {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: white;
    }

    .category-desc {
      color: var(--text-muted);
      font-size: 1.1rem;
    }

    .assets-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
    }

    .asset-card {
      background: var(--bg-card);
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid var(--glass-border);
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .asset-card:hover {
      transform: translateY(-10px);
      border-color: var(--accent-primary);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .asset-image {
      position: relative;
      height: 300px;
      background: #1a1a1a;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: zoom-in;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: all 0.3s;
    }

    .asset-image:hover .image-overlay {
      opacity: 1;
    }

    .zoom-icon {
      background: white;
      color: black;
      padding: 10px 20px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 0.9rem;
      transform: translateY(10px);
      transition: all 0.3s;
    }

    .asset-image:hover .zoom-icon {
      transform: translateY(0);
    }

    /* Logo backgrounds - Off-White */
    .logo-item .asset-image {
      background: #fdfdfd; /* Broken white */
    }

    .asset-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s;
    }

    /* Contain for Logos, Cards, Brochures */
    .asset-image.contain {
      padding: 30px;
    }
    
    .asset-image.contain img {
      object-fit: contain;
    }

    .asset-card:hover img {
      transform: scale(1.05);
    }

    .asset-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(5, 5, 5, 0.7);
      backdrop-filter: blur(10px);
      color: white;
      padding: 6px 14px;
      border-radius: 10px;
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      z-index: 2;
    }

    .asset-details {
      padding: 30px;
      flex-grow: 1;
    }

    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    .asset-details h3 {
      font-size: 1.4rem;
      margin: 0;
    }

    .visit-btn-small {
      background: var(--accent-primary);
      color: white;
      padding: 6px 15px;
      border-radius: 10px;
      font-size: 0.8rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s;
    }

    .visit-btn-small:hover {
      background: var(--accent-secondary);
      transform: scale(1.05);
    }

    .asset-details p {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* Lightbox Styles */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      backdrop-filter: blur(10px);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px;
      animation: fadeIn 0.3s ease;
    }

    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }

    .lightbox-content img {
      max-width: 100%;
      max-height: 90vh;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    }

    .close-btn {
      position: absolute;
      top: -40px;
      right: -40px;
      background: none;
      border: none;
      color: white;
      font-size: 3rem;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .close-btn:hover {
      transform: scale(1.2) rotate(90deg);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @media (max-width: 1100px) {
      .asset-layout { grid-template-columns: 1fr; }
      .asset-sidebar { position: relative; top: 0; }
      .filter-vertical { flex-direction: row; flex-wrap: wrap; }
    }
  `]
})
export class AssetsComponent {
  categories = ['Hepsi', 'Logo', 'Kartvizit', 'Broşür', 'Site', 'Mobil Uygulama', 'Sosyal Medya'];
  activeCategory = 'Hepsi';
  public selectedImage: string | null = null;

  assetItems = [
    // LOGOS
    {
      name: 'Beeses Audio Logo',
      type: 'Logo',
      description: 'Saf analog gücü temsil eden minimalist ve lüks logo tasarımı.',
      image: 'assets/beeses/logo_siyah.png',
      link: 'https://beesesaudio.vercel.app/'
    },
    {
      name: 'And Yönetim Logo',
      type: 'Logo',
      description: 'Profesyonel site yönetimi için kurumsal ve modern logo.',
      image: 'assets/andyonetim/Logo.png',
      link: 'https://andyonetim.com.tr/'
    },
    {
      name: 'Auto Care Logo',
      type: 'Logo',
      description: 'VIP araç restorasyonu için premium marka kimliği.',
      image: 'assets/reparati-auto/logo.png',
      link: 'https://www.reconditionareautocare.ro/'
    },
    {
      name: 'Genel Servis Logo',
      type: 'Logo',
      description: 'Teknik servis hizmetleri için güven veren marka tasarımı.',
      image: 'assets/genel-servis/genelServisLogo.png',
      link: 'https://genelservisiletisim.com.tr/'
    },
    {
      name: 'Crypto App Logo',
      type: 'Logo',
      description: 'Kripto para platformu için modern ve teknolojik logo.',
      image: 'assets/mobil-app/crypto/logo.jpg'
    },
    {
      name: 'Uzaysal App Logo',
      type: 'Logo',
      description: 'Uzay temalı mobil uygulama için ikonik amblem.',
      image: 'assets/mobil-app/uzaysal/Logo.jpeg'
    },
    {
      name: 'Movieeseen Logo',
      type: 'Logo',
      description: 'Sosyal medya kanalı için kurumsal kimlik logosu.',
      image: 'assets/social-media/logo.png',
      link: 'https://www.youtube.com/@Movieeseen'
    },

    // KARTVİZİT
    {
      name: 'And Yönetim Kartvizit (Ön)',
      type: 'Kartvizit',
      description: 'And Yönetim kurumsal kartvizit ön yüz tasarımı.',
      image: 'assets/andyonetim/KartvizitOn.png'
    },
    {
      name: 'And Yönetim Kartvizit (Arka)',
      type: 'Kartvizit',
      description: 'And Yönetim kurumsal kartvizit arka yüz tasarımı.',
      image: 'assets/andyonetim/KartvizitArka.png'
    },
    {
      name: 'Auto Care VIP Kartvizit',
      type: 'Kartvizit',
      description: 'Lüks araç servisleri için tasarlanmış özel kartvizit.',
      image: 'assets/reparati-auto/kartvizit.png'
    },

    // BROŞÜR
    {
      name: 'And Yönetim Broşür 1',
      type: 'Broşür',
      description: 'Kurumsal hizmet detaylarını içeren modern broşür tasarımı.',
      image: 'assets/andyonetim/Brosur.png'
    },
    {
      name: 'And Yönetim Broşür 2',
      type: 'Broşür',
      description: 'Tesis yönetimi ve teknik detaylar broşür sayfası.',
      image: 'assets/andyonetim/Brosur2.png'
    },

    // SİTE
    {
      name: 'And Yönetim Web',
      type: 'Site',
      description: 'Modern site yönetimi arayüz tasarımı.',
      image: 'assets/andyonetim/website.png',
      link: 'https://andyonetim.com.tr/'
    },
    {
      name: 'Beeses Audio Web',
      type: 'Site',
      description: 'High-end ses sistemleri dijital vitrin tasarımı.',
      image: 'assets/beeses/website.png',
      link: 'https://beesesaudio.vercel.app/'
    },
    {
      name: 'Auto Care Web',
      type: 'Site',
      description: 'VIP otomotiv servisleri kurumsal web sitesi.',
      image: 'assets/reparati-auto/website.png',
      link: 'https://www.reconditionareautocare.ro/'
    },
    {
      name: 'Genel Servis Web',
      type: 'Site',
      description: 'Teknik servis randevu ve bilgilendirme platformu.',
      image: 'assets/genel-servis/website.png',
      link: 'https://genelservisiletisim.com.tr/'
    },

    // MOBİL UYGULAMA
    {
      name: 'Crypto App Logo',
      type: 'Mobil Uygulama',
      description: 'Kripto para takibi için modern uygulama logosu.',
      image: 'assets/mobil-app/crypto/logo.jpg'
    },
    {
      name: 'Crypto App Arayüz',
      type: 'Mobil Uygulama',
      description: 'Kripto portföy yönetimi mobil arayüz tasarımı.',
      image: 'assets/mobil-app/crypto/Homepage.jpeg'
    },
    {
      name: 'Uzaysal App Logo',
      type: 'Mobil Uygulama',
      description: 'Uzay temalı uygulama için ikonik logo tasarımı.',
      image: 'assets/mobil-app/uzaysal/Logo.jpeg'
    },
    {
      name: 'Uzaysal App Arayüz',
      type: 'Mobil Uygulama',
      description: 'Kullanıcı dostu mobil uygulama ana ekran tasarımı.',
      image: 'assets/mobil-app/uzaysal/homepage.jpeg'
    },

    // SOSYAL MEDYA
    {
      name: 'Movieeseen Youtube Kapak',
      type: 'Sosyal Medya',
      description: 'Film ve dizi içerikli Youtube kanalı kapak tasarımı.',
      image: 'assets/social-media/youtube.jpeg',
      link: 'https://www.youtube.com/@Movieeseen'
    },
    {
      name: 'Movieeseen Tiktok Tasarımı',
      type: 'Sosyal Medya',
      description: 'Tiktok içerikleri için görsel kimlik tasarımı.',
      image: 'assets/social-media/tiktok.jpeg',
      link: 'https://www.tiktok.com/@movieeseen'
    }
  ];

  setCategory(cat: string) {
    this.activeCategory = cat;
    const element = document.getElementById('assets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getCategoryDescription(): string {
    switch(this.activeCategory) {
      case 'Logo': return 'Markanızın ruhunu yansıtan, akılda kalıcı ve özgün amblem tasarımları.';
      case 'Kartvizit': return 'Kurumsal kimliğinizi yansıtan, profesyonel ve etkileyici basılı materyaller.';
      case 'Broşür': return 'Hizmetlerinizi en iyi şekilde anlatan kreatif tanıtım ve bilgi broşürleri.';
      case 'Site': return 'Modern teknolojilerle donatılmış, kullanıcı odaklı web arayüz tasarımları.';
      case 'Mobil Uygulama': return 'Kullanım kolaylığı ve estetiği birleştiren yenilikçi mobil aplikasyon tasarımları.';
      case 'Sosyal Medya': return 'Dijital dünyadaki varlığınızı güçlendiren YouTube ve TikTok görsel kimlik çalışmaları.';
      default: return 'Tüm tasarım çalışmalarım.';
    }
  }

  openLightbox(image: string) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden'; // Prevent scroll
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto'; // Restore scroll
  }

  filteredAssets() {
    if (this.activeCategory === 'Hepsi') return this.assetItems;
    return this.assetItems.filter(item => item.type === this.activeCategory);
  }
}
