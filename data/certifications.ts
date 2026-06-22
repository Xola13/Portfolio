// ⚠️  TODO — ADD YOUR REAL CERTIFICATIONS AND AWARDS
// Both arrays are empty until you have real credentials to add.
// Add any Microsoft, Azure, UiPath, or other certs you've earned through CondorGreen, CTU, or self-study.

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
}

export const certifications: Certification[] = [];

export interface Award {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}

export const awards: Award[] = [];
