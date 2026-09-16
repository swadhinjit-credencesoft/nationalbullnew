'use client';

import { aboutMetrics } from '@/data/about';
import { AnimatedNumber } from '@/components/motion';

export default function MetricsSection() {
  return (
    <section className="metrics-section">
      <div className="container-wide">
        <div className="metrics-grid metrics-4">
          {aboutMetrics.map((m) => (
            <div className="metric" key={m.label}>
              <strong>
                <AnimatedNumber value={m.value} suffix={m.suffix} />
              </strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
