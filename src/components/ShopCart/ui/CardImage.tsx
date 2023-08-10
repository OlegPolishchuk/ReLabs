import React from 'react';

import { Badge } from '@mantine/core';
import Image from 'next/image';

import cls from './ShopCard.module.css';

export const CardImage = () => {
  return (
    <div className={cls.image}>
      <Image src={'/phone_img.jpeg'} alt={'изображение товара'} fill />

      <div className={cls.image_hint}>Быстрый просмотр</div>

      <button className={cls.filter}></button>

      <Badge className={cls.discount} color="grape">
        -14%
      </Badge>
    </div>
  );
};
