// components/Navbar.js
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="text-green-800 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo or Website Name */}
        <div className="text-2xl font-bold">Harvest Hub</div>

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          {/* Show SignInButton if user is signed out */}
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          {/* Show UserButton if user is signed in */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "rounded-full border-2 border-green-500 hover:shadow-lg transition-all",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
