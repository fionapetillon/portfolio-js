import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/color.png';
import CircleProgress from './CircleProgress';
import htmlImg from '../assets/html.png';
import tailwindImg from '../assets/tailwind.png';
import jsImg from '../assets/javascript.png';
import phpImg from '../assets/php.png';
import sqlImg from '../assets/sql.png';
import reactImg from '../assets/react.png';
import databaseImg from '../assets/database.png';

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
          },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return(
        <section className='pb-12 relative text-center'  id="skills">
            <div className='text-white bg-[#151515] rounded-3xl py-20 -mt-16 mx-12 lg:mx-24 px-4 sm:px-6 lg:px-16'>
                <h2 className='text-4xl uppercase font-bold mb-8'>Compétences</h2>
                <p className='tracking-wider text-gray-300 mb-16 lg:px-32'>Au fil de mon cursus à l'ISEN et de mes expériences professionnelles, j'ai acquis des compétences solides dans plusieurs langages de programmation. Ces compétences me permettent de concevoir et développer des solutions, tout en m'adaptant aux besoins de chaque projet.</p>
                <div className='flex justify-center items-center'> 
                    <Carousel responsive={responsive}
                    infinite={true} className='w-9/12 mx-auto'>
                        <div>
                            <div className='mx-auto w-1/2'>
                                <CircleProgress Img={htmlImg} nameDev={'Développement web'}/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-auto w-1/2'>
                                <CircleProgress Img={tailwindImg} nameDev={'TailwindCSS'}/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-auto w-1/2'>
                                <CircleProgress Img={jsImg} nameDev={'Javascript'}/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-auto w-1/2'>
                                <CircleProgress Img={phpImg} nameDev={'PHP'}/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-auto w-1/2'>
                                <CircleProgress Img={sqlImg} nameDev={'SQL'}/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-auto w-1/2'>
                                <CircleProgress Img={databaseImg} nameDev={'MySql'}/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-auto w-1/2'>
                                <CircleProgress Img={reactImg} nameDev={'React'}/>
                            </div>
                        </div>
                    </Carousel>
                </div>

            </div>
            <img className='w-1/2 top-1/4 absolute bottom-0 -z-10' src={colorSharp}/>
            
        </section>
    );
};

export default Skills;