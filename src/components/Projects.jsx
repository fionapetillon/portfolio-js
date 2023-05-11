import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProjectCard from './ProjectCard';
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import colorSharp2 from '../assets/color-sharp2.png';


function Projects(){
    const [activeTab, setActiveTab] = useState('experiences');
  
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    const getTabClass = (tabName) => {
        const activeClass = 'bg-gradient-to-r from-pink-400 to-violet-800';
        const inactiveClass = 'bg-[#151515]';
        
        if (tabName === activeTab) {
        return activeClass;
        } else {
        return inactiveClass;
        }
    }

    const formations = [
        {
          title: "MASTER 1 EN ECOLE D'INGENIEUR",
          lieu: "ISEN Brest",
          add: "Spécialité Technologies Biomédicales",
          description1 : "Actuellement en année de césure entre ma 4ème et 5ème année d'école d'ingérieure",
          description2: undefined,
          description3: undefined,
          tags: undefined,
        },
        {
          title: "BAC SCIENTIFIQUE",
          lieu: "Lycée St Joseph, Bruz",
          add: "Mention Très Bien",
          description1 : "BAC scientifique option SVT",
          description2: undefined,
          description3: undefined,
          tags: undefined,
        },
    ];

    const experiences = [
        {
            title: "Développeuse Full stack",
            add: "CDI Septembre 2022- Auj",
            lieu: "Future Institution",
            description1 : "• Développement de l'architecture du site web à l'aide des technologies front-end (JavaScript, HTML, Tailwind CSS) et back-end (PHP, SQL)",
            description2 : "• Gestion de la base de données MYSQL",
            description3 : "• Optimisation des performances pour améliorer l'expérience utilisateur",
            tags: [
                { tag: "Tailwind", bgcolor: "blue-300", textcolor:"blue-700" },
                { tag: "JS", bgcolor: "yellow-300", textcolor:"yellow-800" },
                { tag: "PHP", bgcolor: "purple-300", textcolor:"purple-800" },
                { tag: "MYSQL", bgcolor: "pink-300", textcolor:"pink-800" },
              ],
        },
        {
            title: "Développeuse Full Stack",
            add: "Stage Avril 2022- Août 2022",
            lieu: "Yoh Viral Ltd",
            description1 : "• Développement et maintien de l'interface utilisateur du site web en HTML, Tailwind CSS, PHP, Laravel et Javascript",
            description2 : "• Optimisation de l'interface UI/UX",
            description3 : "• Intégration d'API externes pour étendre les fonctionnalités du site web",
            tags: [
                { tag: "Tailwind", bgcolor: "blue-300",textcolor:"blue-700" },
                { tag: "JS", bgcolor: "yellow-300",textcolor:"yellow-800" },
                { tag: "Laravel", bgcolor: "red-300", textcolor:"red-800" },
              ],
        },
    ];
      
    
    return(
        
        <section className='relative py-20'  id="projects">
            <div className='text-white py-10 px-4 sm:px-6 lg:px-16 text-center'>
                <h2 className='text-4xl uppercase font-bold mb-8'>Projects</h2>
                <p className='tracking-wider text-gray-300 mb-12 lg:px-32'>Au cours de mes expériences professionnelles, j'ai eu l'occasion de travailler sur des projets et de découvrir les différentes facettes du développement web. Mon stage m'a permis de me familiariser avec les langages et les technologies, tandis que mon CDI m'a donné l'opportunité de travailler en équipe et de solidifier mes compétences.</p>

                <Tabs>
                    <TabList className='flex items-center justify-center mb-12'>
                        <Tab><h4 className={`cursor-pointer text-lg font-medium tracking-wide border rounded-l-2xl px-16 py-2 ${getTabClass('experiences')}`} onClick={() => handleTabClick('experiences')}>Experiences</h4></Tab>
                        <Tab><h4 className={`cursor-pointer text-lg font-medium tracking-wide border rounded-r-2xl px-16 py-2 ${getTabClass('formations')}`} onClick={() => handleTabClick('formations')}>Formations</h4> </Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex flex-wrap lg:w-4/5 mx-auto'>
                            <div className='grid md:grid-cols-2 gap-16 h-full w-full'>
                                {experiences.map((experience, index) => (
                                    <ProjectCard 
                                        key={index}
                                        title={experience.title} 
                                        description1={experience.description1} 
                                        description2={experience.description2}
                                        description3={experience.description3}
                                        add={experience.add} 
                                        lieu={experience.lieu} 
                                        tags={experience.tags}
                                    />
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex lg:w-4/5 mx-auto'>
                            <div className='grid md:grid-cols-2 gap-16 h-full w-full'>
                                {formations.map((formation, index) => (
                                    <ProjectCard 
                                        key={index}
                                        title={formation.title} 
                                        description1={formation.description1} 
                                        add={formation.add} 
                                        lieu={formation.lieu} 
                                        tags={formation.tags}
                                    />
                                 ))}
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>            
            <img className='absolute top-1/4 w-1/3 right-0 -z-10' src={colorSharp2}/>
        </section>
    );
};

export default Projects;