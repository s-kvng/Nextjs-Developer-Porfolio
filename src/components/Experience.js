import React from 'react';

import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import AnimatedText from '@/components/AnimatedText';
import { experiences } from '@/constants';


const ExperienceCard = ({ exp }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff'}}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={ exp.date }
        iconStyle={{ background: exp.iconBg }}
        icon={ <div>
            <img 
                src={ exp.icon.src }
                alt={ exp.company }
                className=' w-[60%] h-[60%] object-contain'
            />
        </div>}
    >
        <div>
           <h3 className='text-white sm:text-[20px] text-[16px] font-bold'>{exp.title}</h3>
        </div>
    </VerticalTimelineElement>
)


const Experience = () => {

    

  return (
    <>
          <AnimatedText text={`Experience`} className="mb-16 mt-20" />
          <div className='flex flex-col'>
            <VerticalTimeline>
                { experiences.map((exp , index) => (
                    <ExperienceCard key={index} exp = { exp } />
                ))}
            </VerticalTimeline>
          </div>
    </>
  )
}

export default Experience