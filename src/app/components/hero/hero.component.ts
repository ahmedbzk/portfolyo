import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="hero">
      <div class="hero-bg">
        <img src="hero_background_1778696758126.png" alt="Hero Background">
        <div class="overlay"></div>
        <div class="shapes">
          <div class="shape s1"></div>
          <div class="shape s2"></div>
          <div class="shape s3"></div>
        </div>
      </div>
      <div class="container hero-content">
        <h4 class="greeting fade-up">Merhaba, Ben</h4>
        <h1 class="name fade-up" style="animation-delay: 0.2s">Ahmetcan <span>Bozkurt</span></h1>
        <h2 class="title gradient-text fade-up" style="animation-delay: 0.4s">Yaratıcı Yazılım & Tasarım Çözümleri</h2>
        <p class="description fade-up" style="animation-delay: 0.6s">
          Angular uzmanlığı ile ölçeklenebilir web uygulamaları geliştiriyor, Adobe suite ile dijital kimliğinizi güçlendiriyorum.
        </p>
        <div class="hero-btns fade-up" style="animation-delay: 0.8s">
          <a href="#projects" class="btn-primary">Projelerimi Gör</a>
          <a href="#about" class="btn-outline">Yeteneklerim</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      padding: 0 5%;
    }

    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.2;
      filter: blur(10px);
    }

    .shapes .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      z-index: -1;
      opacity: 0.4;
      animation: float 15s infinite alternate ease-in-out;
    }

    .s1 { width: 400px; height: 400px; background: var(--accent-primary); top: -100px; right: -100px; }
    .s2 { width: 300px; height: 300px; background: var(--accent-secondary); bottom: -50px; left: -50px; animation-delay: -5s !important; }
    .s3 { width: 250px; height: 250px; background: #3b82f6; top: 20%; left: 10%; animation-delay: -10s !important; }

    @keyframes float {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(100px, 50px) rotate(30deg); }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, transparent 0%, var(--bg-dark) 90%);
    }

    .hero-content {
      max-width: 1000px;
      z-index: 10;
    }

    .greeting {
      font-size: 1.4rem;
      color: var(--accent-primary);
      margin-bottom: 15px;
      font-weight: 500;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .name {
      font-size: 6.5rem;
      margin-bottom: 15px;
      line-height: 0.9;
      font-weight: 800;
    }

    .name span {
      display: block;
      color: transparent;
      -webkit-text-stroke: 1px var(--text-main);
    }

    .title {
      font-size: 3rem;
      margin-bottom: 30px;
      line-height: 1.1;
      letter-spacing: -1px;
    }

    .description {
      font-size: 1.2rem;
      color: var(--text-muted);
      margin-bottom: 45px;
      max-width: 650px;
      line-height: 1.8;
    }

    /* Animation classes */
    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeUp 0.8s forwards ease-out;
    }

    @keyframes fadeUp {
      to { opacity: 1; transform: translateY(0); }
    }

    .hero-btns {
      display: flex;
      gap: 25px;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      padding: 18px 40px;
      border-radius: 12px;
      font-weight: 700;
      box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3);
      transition: all 0.4s;
    }

    .btn-primary:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 20px 45px rgba(99, 102, 241, 0.4);
    }

    .btn-outline {
      border: 1px solid var(--glass-border);
      padding: 18px 40px;
      border-radius: 12px;
      font-weight: 700;
      background: var(--glass);
      backdrop-filter: blur(10px);
      transition: all 0.4s;
    }

    .btn-outline:hover {
      background: var(--text-main);
      color: var(--bg-dark);
      transform: translateY(-5px);
    }

    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
    }

    .mouse {
      width: 25px;
      height: 45px;
      border: 2px solid var(--text-muted);
      border-radius: 20px;
      position: relative;
    }

    .mouse::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background: var(--accent-primary);
      border-radius: 2px;
      animation: scroll 2s infinite;
    }

    @keyframes scroll {
      0% { opacity: 1; transform: translateX(-50%) translateY(0); }
      100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }

    @media (max-width: 768px) {
      .name { font-size: 3.5rem; }
      .title { font-size: 1.8rem; }
      .hero-btns { flex-direction: column; }
    }
  `]
})
export class HeroComponent {}
