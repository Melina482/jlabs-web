import GradientText from "@/components/ui/gradient-text";
import { useAuth } from "@/contexts/auth.context";

const Home: React.FC = () => {

  const { userInfo } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 w-full">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={8}
        showBorder={false}
        className="text-5xl text-center"
      >
        Welcome to the Home Page!
      </GradientText>
      <span className="text-xl">User: {userInfo.name || "John Doe"}</span>
    </div>
  )
}

export default Home;