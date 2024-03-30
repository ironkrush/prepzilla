import React from 'react';
import SubjectCard from '../components/SubjectCard';

function EightSem() {
  // Sample subject data for first year
  const subjects = [
    {
      subjectName: 'Mathematics',
      instructor: 'Prof. Smith',
      description: 'Introduction to calculus and algebra.'
    },
    {
      subjectName: 'Physics',
      instructor: 'Dr. Johnson',
      description: 'Fundamental principles of mechanics and thermodynamics.'
    },
    // Add more subjects as needed
  ];

  return (
    <div className="eight-sem">
      <div className="sem-content">
        <h2>Eight Sem Subjects</h2>
        <div className="subject-cards">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subjectName={subject.subjectName}
              description={subject.description}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default EightSem;