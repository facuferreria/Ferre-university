import { Button, Nav } from 'react-bootstrap'
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
            habilidades mas reclamadas por el mercado.
          </p>
        </div>
        <div>
          <div className='mb-5'>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Web Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Javascript</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Microsoft Office</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Marketing digital</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Python</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5">Ciberseguridad</Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
          <CourseTab />
        </div>
      </div>
    </div>
  )
}

export default Home