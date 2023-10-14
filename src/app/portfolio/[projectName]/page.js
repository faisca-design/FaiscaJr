import ProjectBanner from "@/components/ProjectBanner";
import ProjectPurpose from "@/components/ProjectPurpose";

 
export default function Page({params}) {
  return (
    <>
      <p style={{color: 'white', marginTop: '20px', textAlign: 'center'}}>
        nome do projeto: {params.projectName} (apenas pra teste)
      </p>
      <ProjectBanner/>
      <ProjectPurpose/>
    </>
  )
}