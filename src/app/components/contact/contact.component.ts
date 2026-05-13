import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="gradient-text">İletişime Geç</h2>
          <div class="underline"></div>
          <p>Yeni bir vizyonu gerçeğe dönüştürmek için mesaj bırakın.</p>
        </div>

        <div class="contact-wrapper">
          <div class="contact-info-panel">
            <div class="info-card-group">
              <a href="mailto:ahmedbozkurt959@gmail.com" class="info-link-card">
                <div class="icon">📧</div>
                <div class="details">
                  <h4>Email</h4>
                  <p>ahmedbozkurt959&#64;gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/905388647110" target="_blank" class="info-link-card">
                <div class="icon green-bg">💬</div>
                <div class="details">
                  <h4>WhatsApp & Telefon</h4>
                  <p>0538 864 71 10</p>
                </div>
              </a>

              <div class="social-grid">
                <a href="https://linkedin.com" target="_blank" class="social-btn linkedin">
                  <span class="social-icon">🔗</span> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" class="social-btn github">
                  <span class="social-icon">🐙</span> GitHub
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-panel">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="premium-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Adınız</label>
                  <input type="text" formControlName="name" placeholder="Ahmetcan">
                  <span class="error" *ngIf="isInvalid('name')">Lütfen adınızı giriniz.</span>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" formControlName="email" placeholder="örnek@gmail.com">
                  <span class="error" *ngIf="isInvalid('email')">Geçerli bir email giriniz.</span>
                </div>
              </div>
              <div class="form-group">
                <label>Mesajınız</label>
                <textarea formControlName="message" rows="5" placeholder="Projenizden bahsedin..."></textarea>
                <span class="error" *ngIf="isInvalid('message')">Lütfen bir mesaj yazın.</span>
              </div>
              <button type="submit" [disabled]="contactForm.invalid" class="submit-btn">
                <span>Mesajı Gönder</span>
                <div class="arrow">→</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 120px 5%;
      background: var(--bg-dark);
    }

    .section-header {
      text-align: center;
      margin-bottom: 70px;
    }

    .section-header h2 { font-size: 3.5rem; }

    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .info-card-group {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .info-link-card {
      display: flex;
      align-items: center;
      gap: 20px;
      background: var(--bg-card);
      padding: 30px;
      border-radius: 25px;
      border: 1px solid var(--glass-border);
      transition: all 0.3s;
      text-decoration: none;
      color: inherit;
    }

    .info-link-card:hover {
      border-color: var(--accent-primary);
      transform: translateX(10px);
      background: rgba(99, 102, 241, 0.05);
    }

    .info-link-card .icon {
      width: 60px;
      height: 60px;
      background: var(--glass);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      font-size: 1.5rem;
    }

    .green-bg { color: #25d366; }

    .social-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 10px;
    }

    .social-btn {
      padding: 20px;
      border-radius: 20px;
      text-align: center;
      font-weight: 700;
      text-decoration: none;
      color: white;
      transition: transform 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .social-icon { font-size: 1.2rem; }

    .linkedin { background: #0077b5; }
    .github { background: #333; }
    .youtube { background: #ff0000; }
    .tiktok { background: #010101; border: 1px solid var(--glass-border); }
    .social-btn:hover { transform: translateY(-5px); }

    .premium-form {
      background: var(--bg-card);
      padding: 50px;
      border-radius: 35px;
      border: 1px solid var(--glass-border);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px;
      margin-bottom: 25px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
    }

    .form-group label {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-muted);
    }

    .form-group input, .form-group textarea {
      background: var(--bg-dark);
      border: 1px solid var(--glass-border);
      padding: 18px;
      border-radius: 15px;
      color: white;
      font-family: inherit;
      transition: border-color 0.3s;
    }

    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--accent-primary);
    }

    .error {
      color: #ef4444;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .submit-btn {
      width: 100%;
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      color: white;
      padding: 20px;
      border-radius: 18px;
      font-weight: 700;
      font-size: 1.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      cursor: pointer;
      border: none;
      transition: all 0.4s;
    }

    .submit-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      filter: grayscale(1);
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
    }

    @media (max-width: 992px) {
      .contact-wrapper { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isInvalid(controlName: string) {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Mesajınız başarıyla gönderildi!');
      this.contactForm.reset();
    }
  }
}
