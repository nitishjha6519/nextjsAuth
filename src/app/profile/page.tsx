// import AboutComponent from "src/components/profile/About";
import ProjectsComponent from "../../components/profile/projects";
import MyProfileLayout from "../../components/profile";

export default function Index() {
  return (
    <>
      <MyProfileLayout>
        <ProjectsComponent />
      </MyProfileLayout>
    </>
  );
}
