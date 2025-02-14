export const getServerSideProps = async () => {
    const res = await fetch('https://api.example.com/projects');
    const projects = await res.json();
  
    return { props: { projects } };
  };
  
  const Projects: React.FC<{ projects: any[] }> = ({ projects }) => {
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Projects;
  