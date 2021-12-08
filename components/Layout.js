import Image from 'next/image'

import ImageNFT from './Card/ImageNFT'

import UserImage from '../public/image/image-avatar.png'
import Ethereum from '../public/image/icon-ethereum.svg'
import Clock from '../public/image/icon-clock.svg'

export default function Layout() {
  return (
    <main className="bg-cardbg text-whitebg p-8 rounded-lg w-96">
      <ImageNFT />

      <div>
        <div className="mt-4 hover:text-txtcyan">
          <h1 className="font-semi-bold">
            <a href="#">Equilibrium #3429</a>
          </h1>
        </div>

        <div className="mt-4">
          <p className="text-soft-blue font-light">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>

        <div className="my-4 flex justify-between">
          <div className="text-txtcyan font-semi-bold flex items-center">
            <div className="mr-2">
              <Image src={Ethereum} alt="Ethereum" width={10} height={15} />
            </div>
            <p>0.041 ETH</p>
          </div>

          <div className="flex items-center text-soft-blue">
            <div className="mr-2">
              <Image src={Clock} alt="Clock" width={20} height={20} />
            </div>
            <p>3 days left</p>
          </div>
        </div>

        <div>
          <hr className="border-soft-blue" />
        </div>

        <div className="flex items-center mt-4">
          <div>
            <div className="h-16 w-16 border-whitebg border-2 rounded-full">
              <Image src={UserImage} alt="User Profile" />
            </div>
          </div>
          <div className="ml-4 font-regular">
            <p>
              Creation of{' '}
              <a href="#" className="hover:text-txtcyan">
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
