// components/SkillPage.js

const SkillPage = () => {
  const skills = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React.js', level: '75%' },
    { name: 'Next.js', level: '70%' },
    { name: 'Redux Toolkit', level: '70%' },
    { name: 'MongoDB', level: '75%' },
    { name: 'HTML', level: '85%' },
    { name: 'CSS', level: '80%' },
    { name: 'Tailwind CSS', level: '75%' },
    // Add more skills as needed
  ];

  return (
    <div className="bg-[#111827] min-h-screen py-10">
      <div className="container text-white mx-auto">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <ul className="list-disc ml-4">
          {skills.map((skill, index) => (
            <li key={index} className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <span className="font-semibold mb-2 sm:mb-0">{skill.name}</span>
                <span className="text-gray-500">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-300 h-3 mt-2">
                <div
                  className="bg-blue-500 h-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillPage;
