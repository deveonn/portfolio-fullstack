import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, OnDestroy, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private safetyTimeout?: ReturnType<typeof setTimeout>;
  private revealed = false;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.el.nativeElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Never hide what's already above the fold on load.
    const isBelowFold = element.getBoundingClientRect().top > window.innerHeight;
    if (!isBelowFold || prefersReducedMotion) {
      return;
    }

    this.renderer.setStyle(element, 'transition', 'opacity .6s ease, transform .6s ease');
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(18px)');

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.reveal();
            }
          });
        },
        { threshold: 0.12 },
      );
      this.observer.observe(element);
    } else {
      this.reveal();
    }

    this.safetyTimeout = setTimeout(() => this.reveal(), 4000);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.safetyTimeout) {
      clearTimeout(this.safetyTimeout);
    }
  }

  private reveal(): void {
    if (this.revealed) {
      return;
    }
    this.revealed = true;
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    this.observer?.disconnect();
    if (this.safetyTimeout) {
      clearTimeout(this.safetyTimeout);
    }
  }
}
