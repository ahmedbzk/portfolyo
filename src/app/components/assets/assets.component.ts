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
            <h2 class="gradient-text">Tasarım Arşivi</h2>
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
            <div class="asset-item" *ngFor="let asset of displayedAssets(); let i = index" [class.logo-item]="asset.type === 'Logo'">
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
                  <p class="asset-desc">{{asset.description}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="load-more-container" *ngIf="hasMoreItems()">
            <button class="load-more-btn" (click)="loadMore()">
              Daha Fazla Göster
              <span class="arrow">↓</span>
            </button>
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
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent {
  categories = ['Hepsi', 'Logo', 'Kartvizit', 'Broşür', 'Site', 'Mobil Uygulama', 'Sosyal Medya'];
  activeCategory = 'Hepsi';
  public selectedImage: string | null = null;
  itemsToShow = 6;

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
    this.itemsToShow = 6; // Reset pagination when category changes
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

  displayedAssets() {
    return this.filteredAssets().slice(0, this.itemsToShow);
  }

  loadMore() {
    this.itemsToShow += 6;
  }

  hasMoreItems() {
    return this.itemsToShow < this.filteredAssets().length;
  }
}
