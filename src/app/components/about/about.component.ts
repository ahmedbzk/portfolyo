import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about" id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="gradient-text">Yetenekler & Vizyon</h2>
          <div class="underline"></div>
        </div>
        
        <div class="bento-grid">
          <div class="bento-item main-bio">
            <h3>Dijital dünyayı daha güzel bir yer haline getiriyorum.</h3>
            <p>
              Yazılım geliştirme tutkumu tasarım estetiğiyle birleştiriyorum. Karmaşık iş süreçlerini, kullanıcı dostu ve ölçeklenebilir dijital ürünlere dönüştürmek en büyük önceliğim.
            </p>
            <div class="stats">
              <div class="stat-item">
                <span class="number">5+</span>
                <span class="label">Proje</span>
              </div>
              <div class="stat-item">
                <span class="number">4+</span>
                <span class="label">Yıl Deneyim</span>
              </div>
            </div>
          </div>

          <div class="bento-item skills-box">
            <h4>Yazılım Dilleri & Frameworks</h4>
            <div class="tags-container">
              <div class="tag-with-icon" *ngFor="let s of softwareSkills">
                <span class="s-icon">{{s.icon}}</span>
                <span class="s-name">{{s.name}}</span>
              </div>
            </div>
          </div>

          <div class="bento-item design-box">
            <h4>Tasarım & Video Edit</h4>
            <div class="design-apps">
              <div class="app-item" *ngFor="let app of designApps">
                <span class="app-icon">{{app.icon}}</span>
                <span class="app-name">{{app.name}}</span>
              </div>
            </div>
          </div>

          <div class="bento-item extra-box">
            <h4>Ekstralar</h4>
            <ul>
              <li>REST API & Microservices</li>
              <li>Cloud Architecture (AWS/GCP)</li>
              <li>Agile/Scrum Management</li>
              <li>UI/UX Strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--bg-dark);
      padding: 120px 5%;
    }

    .section-header {
      text-align: left;
      margin-bottom: 60px;
    }

    .section-header h2 {
      font-size: 3.5rem;
      margin-bottom: 10px;
    }

    .underline {
      width: 100px;
      height: 4px;
      background: var(--accent-primary);
    }

    .bento-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto;
      gap: 25px;
    }

    .bento-item {
      background: var(--bg-card);
      border: 1px solid var(--glass-border);
      padding: 40px;
      border-radius: 30px;
      transition: all 0.3s;
    }

    .bento-item:hover {
      border-color: var(--accent-primary);
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    }

    .main-bio {
      grid-column: span 2;
    }

    .main-bio h3 { font-size: 2.2rem; margin-bottom: 25px; line-height: 1.3; }
    .main-bio p { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 35px; line-height: 1.8; }

    .stats { display: flex; gap: 50px; }
    .stat-item { display: flex; flex-direction: column; }
    .stat-item .number { font-size: 2.8rem; font-weight: 800; color: var(--accent-primary); font-family: 'Outfit'; }
    .stat-item .label { color: var(--text-muted); font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; }

    .skills-box { grid-column: span 1; }
    .tags-container { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
    .tag-with-icon { 
      background: var(--glass); 
      border: 1px solid var(--glass-border); 
      padding: 10px 15px; 
      border-radius: 15px; 
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s;
    }
    .tag-with-icon:hover {
      border-color: var(--accent-primary);
      background: rgba(99, 102, 241, 0.1);
      transform: scale(1.05);
    }
    .s-icon { font-size: 1.2rem; }
    .s-name { font-size: 0.9rem; font-weight: 600; color: var(--text-main); }

    .design-box { grid-column: span 2; }
    .design-apps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 30px; }
    .app-item { background: var(--bg-dark); padding: 20px; border-radius: 20px; text-align: center; border: 1px solid var(--glass-border); }
    .app-icon { font-size: 2rem; display: block; margin-bottom: 10px; }
    .app-name { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); }

    .extra-box { grid-column: span 1; }
    .extra-box ul { list-style: none; margin-top: 20px; }
    .extra-box li { margin-bottom: 15px; color: var(--text-muted); font-weight: 500; display: flex; align-items: center; gap: 10px; }
    .extra-box li::before { content: '→'; color: var(--accent-primary); }

    @media (max-width: 1100px) {
      .bento-grid { grid-template-columns: 1fr 1fr; }
      .main-bio, .design-box { grid-column: span 2; }
    }

    @media (max-width: 768px) {
      .about { padding: 80px 20px; }
      .section-header h2 { font-size: 2.5rem; text-align: center; }
      .section-header { text-align: center; }
      .underline { margin: 0 auto; }
      
      .bento-grid { grid-template-columns: 1fr; gap: 20px; }
      .main-bio, .design-box, .skills-box, .extra-box { grid-column: span 1; padding: 25px; }
      
      .main-bio h3 { font-size: 1.6rem; }
      .stats { gap: 30px; justify-content: center; }
      .stat-item .number { font-size: 2.2rem; }
      
      .design-apps { grid-template-columns: repeat(2, 1fr); gap: 15px; }
    }
  `]
})
export class AboutComponent {
  softwareSkills = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML5', icon: '🟠' },
    { name: 'CSS3', icon: '🔵' },
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '🟢' },
    { name: 'Angular Ionic', icon: '📱' },
    { name: 'Flutter', icon: '💙' }
  ];

  designApps = [
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Adobe Illustrator', icon: '📐' },
    { name: 'CapCut', icon: '🎬' },
    { name: 'Canva', icon: '✨' }
  ];
}
