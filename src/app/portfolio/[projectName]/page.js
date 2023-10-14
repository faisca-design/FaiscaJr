import ProjectBanner from "@components/ProjectBanner";
import ProjectPurpose from "@components/ProjectPurpose";
import ProjectServices from "@components/ProjectServices"
import ProjectValues from "@components/ProjectValues"
 
export default function Page({params}) {
  return (
    <>
      <p style={{color: 'white', marginTop: '20px', textAlign: 'center'}}>
        nome do projeto: {params.projectName} (apenas pra teste)
      </p>
      <ProjectBanner/>
      <ProjectPurpose/>
      <ProjectServices
        titulo1 ="titulo1"
        titulo2 ="titulo2"
        titulo3 ="titulo3"
      />
      <ProjectValues
        titulo1 ="titulo1"
        titulo2 ="titulo2"
        titulo3 ="titulo3"
      />
    </>
  )
}