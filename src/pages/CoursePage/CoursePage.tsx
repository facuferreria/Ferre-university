import { Radio, RadioGroup } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import Rating from "@mui/material/Rating"
import { Button, FormGroup, ListGroup } from "react-bootstrap"
import Slider from "../../components/Slider/Slider"
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
                    <div className={style.container_slider}>
                        <Slider />
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4 className={style.title}>Categoria</h4>
                    <FormGroup className={style.container_options}>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="All" />
                        <FormControlLabel control={<Checkbox />} label="Web Development" />
                        <FormControlLabel control={<Checkbox />} label="Javascript" />
                        <FormControlLabel control={<Checkbox />} label="Python" />
                        <FormControlLabel control={<Checkbox />} label="Cibersecurity" />
                        <FormControlLabel control={<Checkbox />} label="Office" />
                        <FormControlLabel control={<Checkbox />} label="Blockchain & Fintech" />
                    </FormGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4 className={style.title}>Popularidad</h4>
                    <FormGroup className={style.container_options}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="+4.0"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="+4.0" control={<Radio />} label={<Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />} />
                            <FormControlLabel value="+3.5" control={<Radio />} label={<Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />} />
                            <FormControlLabel value="+3.0" control={<Radio />} label={<Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />} />
                            <FormControlLabel value="+2.5" control={<Radio />} label={<Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />} />
                            <FormControlLabel value="+2.0" control={<Radio />} label={<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />} />
                        </RadioGroup>
                    </FormGroup>
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