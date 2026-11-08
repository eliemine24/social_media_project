import { useState } from 'react';
import { View } from './View';

const image = {
  url: "https://www.instagram.com/p/DfdEq5Dx8kY/?utm_source=ig_web_copy_link&xtok=NTc4MTIwNjQ2YQ=="
}

export default function App(){

  return (
    <>
      <h1>Title</h1>
      <img
      src={image.url}

      />
    </>
  )
}

