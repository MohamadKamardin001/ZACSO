import { Heart, Users, Sparkles } from 'lucide-react';
import { features } from '@/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  users: Users,
  sparkles: Sparkles,
};

export default function FeatureCards() {
  return (
    <section className="relative z-10 -mt-20 mb-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Heart;
            return (
              <div key={feature.title} className="card p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-[#3e8f75]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#3e8f75] group-hover:scale-110">
                  <Icon className="w-7 h-7 text-[#3e8f75] transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#123e35]">{feature.title}</h3>
                <p className="text-[#6d7974] leading-relaxed text-[15px]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
