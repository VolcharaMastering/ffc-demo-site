const LogoMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <rect x="2.5" y="2.5" width="15" height="19" rx="3" stroke="#2d2d44" strokeWidth="1.6" fill="#1a1a2e" />
    <rect x="5.5" y="6" width="9" height="1.8" rx=".9" fill="#00d4ff" />
    <rect x="5.5" y="10" width="7" height="1.8" rx=".9" fill="#4b5569" />
    <rect x="5.5" y="14" width="5" height="1.8" rx=".9" fill="#4b5569" />
    <circle cx="16.5" cy="16.5" r="6.2" fill="#0f0f1e" stroke="#10b981" strokeWidth="1.6" />
    <path d="M13.7 16.6l1.9 1.9 3.6-3.9" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default LogoMark;
