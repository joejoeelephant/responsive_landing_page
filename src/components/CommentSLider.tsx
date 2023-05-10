import React, { useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CommentSlider: React.FC = () => {
  const [sliderItemWidth, setSliderItemWidth] = useState<number>(0);

  useEffect(() => {
    const calculateSliderItemWidth = () => {
      const screenWidth = window.innerWidth;
      let newSliderItemWidth = 0;
      if(screenWidth < 480) {
        newSliderItemWidth = screenWidth*0.9;
      }
      else if (screenWidth < 768) {
        newSliderItemWidth = screenWidth*0.9;
      }
      else if(screenWidth < 1024) {
        newSliderItemWidth = screenWidth*0.6;
      } else {
        newSliderItemWidth = screenWidth * 0.3;
      }

      setSliderItemWidth(newSliderItemWidth);
    };

    calculateSliderItemWidth();
    window.addEventListener('resize', calculateSliderItemWidth);

    return () => {
      window.removeEventListener('resize', calculateSliderItemWidth);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true
  };

  return (
    <section className='container mx-auto p-3 first-letter lg:h-[46rem] lg:flex lg:flex-col lg:justify-center'>
      <div className='text-center'>
        <h2 className='section-title-1'>
          Short heading
        </h2>
        <p className='section-content lg:w-3/4 mx-auto mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, explicabo itaque. Veniam ut suscipit dignissimos explicabo! Aperiam tempore maxime itaque!
        </p>
      </div>
      <div className='mt-6 lg:mt-12'>
        <Slider {...settings}>
            {
              [1,2,3,4,5,6].map(slider => {
                return (
                  <div key={slider} style={{width: sliderItemWidth, marginLeft: 'auto', marginRight: 'auto'}}>
                    <div className='mx-3 border-2 border-primary rounded-md p-2 md:p-4 flex flex-col gap-6 sm:flex-row'>
                      <div className='sm:flex-1'>
                        <img src="/icons/Userpic.png" alt="UserPic" className='w-full max-w-fit' />
                      </div>
                      <div className='sm:flex-4'>
                        <div className='flex justify-end -mt-12 sm:mt-0'>
                          <img src="/icons/Twitter.png" alt="Twitter" />
                        </div>
                        <p className='section-content'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam velit nemo eum officia in magnam earum! Ipsam, doloribus voluptate.
                        </p>
                        <div className='mt-3 sm:flex sm:justify-between sm:items-center'>
                          <div className='font-bold text-size-5'>Bertha Blake</div>
                          <div className='flex gap-2 mt-3'>
                            <img src="/images/Twitter.png" alt="Twitter" />
                            <img src="/images/Twitter.png" alt="Twitter" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </Slider>
      </div>
    </section>
  );
};

export default CommentSlider;
