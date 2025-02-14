import styles from '../styles/Home.module.css';
import Image from 'next/image';
import profilePic from '../public/profile-pic.jpg';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
        <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
      <h1 className={styles.heading}>Welcome to My Portfolio</h1>
      {/* Add content here */}
    </div>
  );
};


export default Home;
