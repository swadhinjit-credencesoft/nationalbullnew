import {
  TrendingUp,
  BarChart3,
  PieChart,
  Banknote,
  Gem,
  Shield,
  Landmark,
  Rocket,
  Globe,
  Users,
  Clock,
  Lightbulb,
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Target,
  type LucideIcon,
} from 'lucide-react';

// Maps string icon names (used in data files) to lucide components.
const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  BarChart3,
  PieChart,
  Banknote,
  Gem,
  Shield,
  Landmark,
  Rocket,
  Globe,
  Users,
  Clock,
  Lightbulb,
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Target,
};

export function getIcon(name: string, fallback: LucideIcon = Target): LucideIcon {
  return iconMap[name] ?? fallback;
}
