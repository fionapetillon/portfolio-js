import React from 'react';
import headerImg from '../assets/header.png';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner(){
    return(
        <section className='banner text-white' id="home">
            <div className="grid md:grid-cols-2 justify-center items-center py-32 mx-auto px-4 sm:px-6 lg:px-16 gap-20">
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""} id="banner">
                        <div className='flex justify-center'>
                            <div className='inline-block bg-gradient-to-r from-pink-400 to-violet-800 px-4 py-1 mb-8 rounded-md'>
                                <h1 className="text-center text-lg font-medium">Bienvenue sur mon Portfolio</h1>
                            </div>
                        </div>
                        
                        <p className="text-center text-5xl mb-2 font-bold">Je m'appelle Fiona Pétillon</p>
                        <p className="text-center text-5xl mb-12 font-medium">Je suis{' '}
                            <TypeAnimation
                                sequence={['étudiante', 1500, 'développeuse', 1500, 'passionnée', 2000,]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>
                        <p className='text-center text-gray-300 mb-10'>
                        Actuellement en césure entre ma 4ème et 5ème année d'école d'ingénieur à l'ISEN Brest, je travaille en tant que développeuse full stack en CDI à distance. Mon objectif pour septembre 2023 est de poursuivre ma formation en alternance et je suis donc à la recherche d'une entreprise.
                        </p>
                        <button className="text-left text-white font-bold relative">
                            <a href="mailto:petillon.fiona@gmail.com">Se connecter</a>
                            <span className="absolute top-1/2 transform -translate-y-1/2 
                            -right-6 transition duration-200 ease-in-out hover:translate-x-1">
                            <FaArrowRight size={16} />
                            </span>
                        </button>
                    </div>}
                </TrackVisibility>
                <div className="flex justify-center animate-float">
                    <img src={headerImg} alt="Header" />
                </div>
            </div>
        </section>
    );
};


export default Banner;
