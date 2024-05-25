import { NextImage, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

const BannerField = {
  title: { value: 'Incredible India' },
  description: { value: 'Experience the Magic of India&rsquo;s Renowned Cities' },
  imageCol1: [
    {
      image: {
        value: {
          src: 'https://city-blond.vercel.app/1.jpg',
          alt: 'bannerImage',
          height: '256',
          width: '176',
        },
      },
    },
    {
      image: {
        value: {
          src: 'https://city-blond.vercel.app/7.jpg',
          alt: 'bannerImage',
          height: '256',
          width: '176',
        },
      },
    },
  ],
  imageCol2: [
    {
      image: {
        value: {
          src: 'https://city-blond.vercel.app/8.jpg',
          alt: 'bannerImage',
          height: '256',
          width: '176',
        },
      },
    },
    {
      image: {
        value: {
          src: 'https://city-blond.vercel.app/4.jpg',
          alt: 'bannerImage',
          height: '256',
          width: '176',
        },
      },
    },
    {
      image: {
        value: {
          src: 'https://city-blond.vercel.app/5.jpg',
          alt: 'bannerImage',
          height: '256',
          width: '176',
        },
      },
    },
  ],
  imageCol3: [
    {
      image: {
        value: {
          src: 'https://city-blond.vercel.app/2.jpg',
          alt: 'bannerImage',
          height: '256',
          width: '176',
        },
      },
    },
    {
      image: {
        value: {
          src: 'https://city-blond.vercel.app/6.jpg',
          alt: 'bannerImage',
          height: '256',
          width: '176',
        },
      },
    },
  ],
};
export default function Banner({ fields = BannerField }) {
  return (
    <div className="relative pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-60 lg:pt-60">
      <div className=" mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <Text
            tag="p"
            field={fields?.title}
            className="animate__animated animate__slow animate__fadeInLeft text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          />
          <RichText
            field={fields?.description}
            className="mt-4 text-xl animate__delay-1s text-gray-700 animate__animated animate__fadeIn"
          />
        </div>
        <div>
          <div className="mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none animate__animated animate__slower animate__fadeIn hidden lg:block lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-7">
                    {fields?.imageCol1?.map((images) => (
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <NextImage
                          field={images?.image}
                          className=" h-full w-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-7">
                    {fields?.imageCol2?.map((images) => (
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <NextImage
                          field={images?.image}
                          className=" h-full w-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-7">
                    {fields?.imageCol3?.map((images) => (
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <NextImage
                          field={images?.image}
                          className=" h-full w-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

