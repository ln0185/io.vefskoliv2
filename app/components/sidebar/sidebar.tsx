import { auth } from "auth";
import { Profile } from "../profile/profile";
import { NavbarContainer } from "globalStyles/layout";
import { NavBar } from "components/navigation/NavBar";
import { DarkModeToggle} from "components/darkmode/darkmode";

async function Sidebar() {
  const session = await auth();
  return (
    <>
      <Profile session={session} />
      <NavbarContainer>
        <NavBar />
      </NavbarContainer>
      <DarkModeToggle></DarkModeToggle>
    </>
  );
}
export default Sidebar;
