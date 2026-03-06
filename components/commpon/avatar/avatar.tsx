import Image, { ImageProps } from "next/image";
import type React from "react";
import avatarImg from '@/assets/avatar.png';
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import pk from '@/package.json';

export type AvatarProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>;

export const Avatar: React.FC<AvatarProps> = async (props) => {
    const t = await getTranslations(TranslationNamespace.COMMON);

    return <Image src={avatarImg.src} alt={t('components.avatar.Alt', { name: pk.author.name })} width={avatarImg.width} height={avatarImg.height} {...props}/>
}