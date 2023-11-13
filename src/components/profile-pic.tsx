import Image, { ImageProps } from 'next/image';
import { cn } from '../lib/utils';

type ProfilePictureProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>;

export function ProfilePicture({className,...props}: ProfilePictureProps) {
  return (
    <Image
      {...props}
      className={cn("max-w-[300px] max-h-[488px] bg-neutral-200",className)}
      src="/profile.webp"
      alt="A Picture of Nicholas Webster"
      width={490}
      height={488}
    />
  );
}