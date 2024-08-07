import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const termsGuard: CanActivateFn = () => {
  const router = inject(Router);
  const termsAccepted = localStorage.getItem('termsAccepted') === 'true';
  if (!termsAccepted) {
    router.navigate(['/terms']);
    return false;
  }
  return true;
};
