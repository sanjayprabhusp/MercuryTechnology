import React from 'react';

export function WaveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#081a33]">
      <div className="absolute inset-0 wave-bg-main" />
      <div className="absolute inset-0 opacity-70 mix-blend-screen pointer-events-none wave-bg-layer-1" />
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none wave-bg-layer-2" />
      <div className="absolute inset-0 z-50 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10 mix-blend-overlay" />
    </div>
  );
}
