export interface SmartFunction {
  image: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  details: string[];
}

export interface SmartSectionProps {
  title?: string;
  subtitle?: string;
  functions: SmartFunction[];
  className?: string;
}
