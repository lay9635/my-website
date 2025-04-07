interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  color?: 'white' | 'red' | 'black';
}

export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  color = 'red'
}: SectionTitleProps) {
  const getTextColor = () => {
    switch (color) {
      case 'white':
        return 'text-white';
      case 'black':
        return 'text-gray-900';
      case 'red':
      default:
        return 'text-red-600';
    }
  };

  const getAlignment = () => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      case 'left':
      default:
        return 'text-left';
    }
  };

  return (
    <div className={`mb-12 ${getAlignment()}`}>
      <h2 className={`section-title anton uppercase ${getTextColor()}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
