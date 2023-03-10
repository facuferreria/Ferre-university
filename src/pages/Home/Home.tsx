import { Button, Nav, Tab, Tabs } from 'react-bootstrap'
import CourseTab from '../../components/CourseTab/CourseTab'
import style from '../Home/Home.module.scss'


function Home() {
  return (
    <div className={style.container}>
      <div className={style.container_title}>
        <h1 className={style.title}>
          Aprende las habilidades 
          del futuro en la universidad digital 
          mas aclamada de toda Latinoamerica
        </h1>
        <p className={style.text}>
          En Ferre University tenemos el objetivo de formar a los siguientes lideres mundiales con las
          habilidades mas reclamadas por el mercado.
        </p>
      </div>
      <Button className="mt-3 mb-5 p-3" size="lg" href="#" variant="outline-warning">Mira nuestros cursos</Button>
      <div className={style.container_topCourses}>
        <div className={style.container_title}>
          <h2 className={style.subtitle}>
            Una amplia cantidad de cursos para que aprendas y vayas al siguiente nivel
          </h2>
          <p className={style.text}>
            En Ferre University tenemos el objetivo de formar a los siguientes lideres mundiales con las
            habilidades mas reclamadas por el mercado. Por eso te mostramos los mejores cursos hechos ni mas ni menos
            que por profesionales experimentados en el rubro.
          </p>
        </div>
        <div>
          <div className='mb-5'>
          <Tabs defaultActiveKey="web-development">
            <Tab eventKey="web-development" title="Web Development">
              <CourseTab type="webdevelopment"/>
            </Tab>
            <Tab eventKey="javascript" title="Javascript">
              <CourseTab type="javascript"/>
            </Tab>
            <Tab eventKey="python" title="Python">
              <CourseTab type="python"/>
            </Tab>
            <Tab eventKey="cibersecurity" title="Cibersecurity">
              <CourseTab type="cibersecurity"/>
            </Tab>
            <Tab eventKey="office" title="Microsoft Office">
              <CourseTab type="office"/>
            </Tab>
            <Tab eventKey="blockchain" title="Blockchain & Fintech">
              <CourseTab type="blockchain"/>
            </Tab>
          </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home