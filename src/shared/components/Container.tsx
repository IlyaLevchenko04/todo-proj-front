import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = (props: ContainerProps) => (
  <div
    className={twMerge(
      'px-xs laptop:w-l-container desktop:w-d-container tablet:w-t-container tablet:mx-auto tablet:px-0 tablet-vertical:w-t-v-container',
      props.className
    )}
  >
    {props.children}
  </div>
);
