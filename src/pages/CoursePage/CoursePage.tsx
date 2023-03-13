import { Button, ListGroup } from "react-bootstrap"
import style from '../CoursePage/CoursePage.module.scss'


function CoursePage() {
  return (
    <div className={style.container}>
        <div className={style.container_filter}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Button size="lg" variant="warning">Filtrar</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4 className={style.title}>Precio</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4 className={style.title}>Categoria</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4 className={style.title}>Popularidad</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4 className={style.title}>Grabacion</h4>
                </ListGroup.Item>
            </ListGroup>
        </div>
        <div>
            Cursos por aca
        </div>
    </div>
  )
}

export default CoursePage