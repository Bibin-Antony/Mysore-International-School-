'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const TimelineSection = () => {
  const timelineData = [
    {
      date: 'April 2013',
      phase: 'Phase - 01',
      title: 'The Beginning',
      description: 'The gates of Knowledge of Mysore International School (earlier known as MLZS) was opened to the students. It was an amazing journey of catering wisdom to students to excel in all walks of life.'
    },
    {
      date: 'March 2018',
      phase: 'Phase - 02',
      title: 'First Milestone',
      description: "The school crossed all hurdles and it's first 10th batch passed out in 2018 with flying colours. Our young minds have kept our name high with excellent results in every board exams."
    },
    {
      date: '2020-2023',
      phase: 'Phase - 03',
      title: 'International Recognition',
      description: 'The School achieved many milestones on the way. The most important amongst them being the ISA (INTERNATIONAL SCHOOL AWARD) 2016-19 and the INTERNATIONAL DIMENSIONS IN SCHOOL.'
    },
    {
      date: '2024',
      phase: 'Phase - 04',
      title: 'New Identity',
      description: 'We underwent a significant transformation and rebranded our school from Mount Litera Zee School to Mysore International School.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#580B57] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Our Journey
          </h2>
          <p className="text-[#666666] text-lg">
            A Legacy of Excellence Through the Years
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline position="alternate-reverse">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
                  m: 'auto 0',
                  fontFamily: 'var(--font-display)',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 300,
                  color: '#580B57'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.date}
                </motion.div>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  <TimelineDot
                    sx={{
                      bgcolor: '#580B57',
                      width: 16,
                      height: 16,
                      margin: '12px 0'
                    }}
                  />
                </motion.div>
                {index !== timelineData.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: '#580B57' }} />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-2">
                    <span className="text-xs text-[#666666] uppercase tracking-wider font-semibold">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-[#580B57] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default TimelineSection;
