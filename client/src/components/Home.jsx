import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollText = document.querySelector('.scroll-text');
      if (window.scrollY > 100) {
        scrollText.classList.add('slide-in');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 text-center">
        <div className='w-full md:w-1/2 mt-12 order-2 md:order-1'>
          <h1 className='text-5xl pt-32'>Taking care for your pets!</h1>
        </div>
        <div className='w-full md:w-1/2 order-1 mt-12'>
            <div className="flex justify-center flex-wrap">
                <img className='w-[50%] object-cover m-2.5 ' src="https://s3-alpha-sig.figma.com/img/3772/3968/d5ccc61c86157707f64af0f6e1ff470e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dLYD6GxtLEpRUqQ4BFPwvzHP-HAv6SC~ZJzIEnCMhrV95cgfcXX3~nPeYgz9bY6Eo-JOva4a~MifYJxusTaPE1qfAejZjFXlHMqPXe57DFWjfnVOnKuY4Xw1aKkjoStSewYHwkGPbtVDmsbdl9NWmqYLHrVRAmiAnqYBk5KuY-TNv1mH2vOmqpowGd8iysIC-eP8nd6fNLA~4SpdOVbw0Jt1ILgUNeGsZkAt7HPYx8yiODoCZpM9qImplrmfd1dNNF2ogIa12S4KeslnHajyKC~vB2RAmgpU~E~Wcq06jY-oBoX3U7LUNDvr3sgKWKPDqNK6QeU7abtI4pbF0qaWAQ__" alt=""/>
                <img className='w-[50%] object-cover m-2.5 ' src="https://s3-alpha-sig.figma.com/img/2c69/54c0/d4fb881c9062651c82a1aa521e49f059?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwB8P2c6mE7gzmxfH97HumWPMrLbhcHL01O6PPvWQil1KqiUrtr8zf2UcyEpdCEFi41vccxHwIK9nR9Yq3nqMozGl7zJh1vrmWwsz9KDXBsH8XzuKpuoXLHCeSVmjjbWs6SmXJwrxU6cFAFt72Vj4NrhCnwIE8LOtEeJPCmOz8644CE5YbiH2cX9lwn-LjfL2PH~Vfy0Afb2YNrVxPjmyvPYypU0FpvdwjF3cqBK8gBGZKy-7PbAx9j~HAZYJgh79LkVX5axjStcU9YRhJJ-~DS1uIgR-1f2JaczSNn1rZw5D2Be3O6veZ2UFT7RQ136ZcSGLV20QcJSAY4Z~1lr1g__" alt=""/>
                <img className='w-[50%] object-cover m-2.5 ' src="https://s3-alpha-sig.figma.com/img/2c69/54c0/d4fb881c9062651c82a1aa521e49f059?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwB8P2c6mE7gzmxfH97HumWPMrLbhcHL01O6PPvWQil1KqiUrtr8zf2UcyEpdCEFi41vccxHwIK9nR9Yq3nqMozGl7zJh1vrmWwsz9KDXBsH8XzuKpuoXLHCeSVmjjbWs6SmXJwrxU6cFAFt72Vj4NrhCnwIE8LOtEeJPCmOz8644CE5YbiH2cX9lwn-LjfL2PH~Vfy0Afb2YNrVxPjmyvPYypU0FpvdwjF3cqBK8gBGZKy-7PbAx9j~HAZYJgh79LkVX5axjStcU9YRhJJ-~DS1uIgR-1f2JaczSNn1rZw5D2Be3O6veZ2UFT7RQ136ZcSGLV20QcJSAY4Z~1lr1g__" alt=""/>
                <img className='w-[50%] object-cover m-2.5 ' src="https://s3-alpha-sig.figma.com/img/2d7b/8a74/546b209ae9685aa4bdb4a4b66f5588ed?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0T4D~J2BBbWz7QT500PnEhx6eaOMoNnw822FQAWF4kdWxDux-0xdAAn0Qf2QxGD5iOjLOxftyMxy8TW8W7p5ONwH8KZgV9P7wiCuwjSW3Lh4SEkmoW-VK5NL3bkFmsTBd~y9hrbivDDIdVuewTT51yfVpe2rM3XP9sXSyjvh894AGWXy~uPvLfB2bKx6BPOJnkF-kevJA88Xnj61X5-jyE5M12f3tj~AqGpo7x0COkxCdspTCkMc~tQoP6YHJLI66SqTn~HclkFoJGaDK73zu4CjuZ4HEd~J3fEAi3pzfeNhw76vOiShDRLDlI-UODQY9o6FE92lq0DUzWNHAu3tg__" alt=""/>
                <img className='w-[50%] object-cover m-2.5 ' src="https://s3-alpha-sig.figma.com/img/32b8/89ee/4c4e1c09be9d1aa52aa1e4e6b8daf476?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ei8flm8KsPgF7F44A-R7Bhf-Tb10cK4WjBhSg3jrgCSln27jpketozEn~O1PFlnI2D5YJMcNLhvhluz7qD6WKVfxYZCrpBsZbCW2ojm7gML1eTqbXCZxgUnJxgou4csZV9HxHJKsoQoOCYxWiRkus4blBNmfhxT2NpnguAkaPPYDdBxT-y-d2TkosC3Jun7Kzf58W8YC9TDmdw99i3HUULwLwMwGcu6jBT~CYvo7zSqQq54Z90TFf8-2kbYKxLpZFEkvZ9e1ccQrRCN05aBRXNbMATaSINkorTp4ylBQYhMtnrL--AawOpyyBJCmvFFmkQUfccjK3OwnzQPiRDSvfg__" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Home