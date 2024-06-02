import React, { useEffect, useState } from 'react';
import styles from './Icon.module.scss';

type Props = {
  iconName: string;
  onIconClick: () => void;
};

const Icon: React.FC<Props> = ({
  iconName,
  onIconClick,
}: Props): JSX.Element => {
  const [iconSrc, setIconSrc] = useState<any | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        // Dynamically import the SVG icon
        const { default: icon } = await import(
          `../../Assets/Images/Icons/${iconName}.svg`
        );
        setIconSrc(icon);
      } catch (error) {
        console.error(`Error importing ${iconName} icon:`, error);
      }
    };

    importIcon();

    // Cleanup function
    return () => {
      setIconSrc(null); // Reset iconSrc when component unmounts
    };
  }, [iconName]); // Re-run effect when iconName prop changes

  return (
    <div>
      <img
        className={styles.icon}
        src={iconSrc}
        alt="icon"
        onClick={onIconClick}
      />
    </div>
  );
};

export default Icon;
