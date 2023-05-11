import React from "react";
import Tag from './Tag';

function ProjectCard({title, lieu, add, description1, description2,description3, tags}) {
    
    return(
    <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="bg-[#151515] rounded-lg p-8 h-full w-full">
          <h4 className="text-white text-2xl font-bold mb-2">{title}</h4>
          <p className="text-gray-300 text-sm italic mb-1">{add}</p>
          <p className="text-gray-300 text-sm tracking-wider mb-8">{lieu}</p>
          <ul className="list-none text-left mx-2">
            <li className="mb-4">{description1}</li>
            <li className="mb-4">{description2}</li>
            <li className="mb-4">{description3}</li>
          </ul>
          <div className="mt-8">
            {tags && tags.map((tags, index) => (
                <Tag
                    key={index}
                    tag={tags.tag} 
                    bgcolor={tags.bgcolor} 
                    textcolor={tags.textcolor}
                />
            ))}
          </div>
        
      </div>
    </div>
    )
}

export default ProjectCard;