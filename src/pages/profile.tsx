import { useAuth } from "@/contexts/auth.context";

const Profile: React.FC = () => {

  const { userInfo } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 w-full">
      <div className="flex flex-col gap-5 border border-gray-500 bg-[#1c182c] p-6 rounded-md shadow-md w-full max-w-[600px]">
        <h1 className="text-2xl font-bold text-center sm:text-start">My Profile</h1>
        <div className="flex flex-col sm:flex-row gap-5 text-xl items-center sm:items-start">
          <img 
            src="/lebron.webp" 
            alt="Profile Picture" 
            className="w-48 h-48 rounded-sm" 
          />
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-sm text-[#40ffaa]">Name:</p>
              <p>{userInfo.name || "John Doe"}</p>
            </div>
            <div>
              <p className="text-sm text-[#40ffaa]">Email:</p>
              <p>{userInfo.email || "john.doe@example.com"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;