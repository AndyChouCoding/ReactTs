import IGHeader from "pages/components/IGHeader";
import IGContainer from "pages/components/IGContainer";
import IGStory from "./components/IGStory";
import IGUser from "pages/components/IGUser";

const Home: React.FC = () => {
  return <>
  <IGHeader />
  <IGContainer>
     <div className="flex lg:justify-center">
      <div className="w-full lg:w-[600px]">
        <IGStory />
      </div>
      <div className="hidden lg:block lg:w-[424px]">
        <IGUser avatar="/images/avatars/a9.png" account="user1" location="123" showFollow={true} isFollowing={true}/>
      </div>
     </div>
  </IGContainer>
 
  </>;
};

export default Home;
