import Image from 'next/image'
import NFTImage from '../../public/image/image-equilibrium.jpg'
import Cover from '../../public/image/icon-view.svg'

import { useState } from 'react'

export default function ImageNFT() {
  const [isHover, setIsHover] = useState(0)

  const setHoverIn = (e) => {
    setIsHover(1)
  }

  const setHoverOut = () => {
    setIsHover(0)
  }

  return (
    <>
      <div className="block relative">
        <Image src={NFTImage} alt="NFT Image" className="rounded-xl" />
        <div
          className={
            isHover
              ? 'hover:bg-txtcyan top-0 right-0 bottom-0 left-0 absolute rounded-lg'
              : 'top-0 right-0 bottom-0 left-0 absolute rounded-lg'
          }
          onMouseOver={setHoverIn}
          onMouseOut={setHoverOut}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className={isHover ? '' : 'hidden'}>
              <Image src={Cover} alt="Cover Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
