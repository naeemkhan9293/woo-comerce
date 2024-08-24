import Image from "next/image";

interface MediumCardProps {
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

export const MediumCard = ({
  imageAlt,
  imageUrl,
  className = "",
}: MediumCardProps) => {
  const combinedClasses = `relative w-full h-full ${className}`;

  return (
    <div className={combinedClasses}>
      <Image
        src={imageUrl}
        fill
        alt={imageAlt}
        className="object-cover" 
        priority 
      />
    </div>
  );
};
