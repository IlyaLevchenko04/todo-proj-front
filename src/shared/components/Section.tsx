import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = (props: SectionProps) => {
  return (
    <section
      className={twMerge(
        'phone:py-[36px] tablet-vertical:py-[100px]',
        props.className
      )}
    >
      {props.children}
    </section>
  );
};
