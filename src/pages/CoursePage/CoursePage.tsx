import FilterForm from "../../components/FilterForm/FilterForm"
import FiltersSideBar from "../../components/FiltersSideBar/FiltersSideBar"
import style from '../CoursePage/CoursePage.module.scss'
import { useState } from "react"
import { ListGroup, Button, Row } from "react-bootstrap"
import Slider from "../../components/Slider/Slider"
import CourseTab from "../../components/CourseTab/CourseTab"


function CoursePage() {

    const popularityOptions = ["4.5 estrellas o mas", "3.5 estrellas o mas", "2.5 estrellas o mas", "1.5 estrellas o mas"];
    const categoryOptions = ["All", "Web Development", "Javascript", "Python", "Cibersecurity", "Office", "Blockchain"];
    const recordingOptions = ["All", "In Live", "Recorded"];
    const [selectedRadioOption, setSelectedRadioOption] = useState("");
    const [selectedCheckOptions, setSelectedCheckOptions] = useState<string[]>([]);

    const handleRadioOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadioOption(event.target.value);
    };

    const handleCheckOptionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const optionValue = event.target.value;
        if (selectedCheckOptions.includes(optionValue)) {
        setSelectedCheckOptions(selectedCheckOptions.filter((option) => option !== optionValue));
        } else {
        setSelectedCheckOptions([...selectedCheckOptions, optionValue]);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.container_filter}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Button className={style.button} size="lg" variant="warning">Filtrar</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FiltersSideBar 
                            title="Precio"
                            FilterComponent={<Slider />}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FiltersSideBar 
                            title="Popoularidad"
                            FilterComponent={
                                <FilterForm 
                                    options={popularityOptions}
                                    selectedOption={selectedRadioOption}
                                    onChange={handleRadioOptionChange}
                                    isCheckboxForm={false}
                                />
                            }
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FiltersSideBar 
                            title="Categoria"
                            FilterComponent={
                                <FilterForm 
                                    options={categoryOptions}
                                    selectedOption={""}
                                    onChange={handleCheckOptionsChange}
                                    isCheckboxForm={true}
                                />
                            }
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FiltersSideBar 
                            title="Grabacion"
                            FilterComponent={
                                <FilterForm 
                                    options={recordingOptions}
                                    selectedOption={""}
                                    onChange={handleCheckOptionsChange}
                                    isCheckboxForm={true}
                                />
                            }
                        />
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className={`${style.container_course}`}>
                <Row md={2} xs={1} lg={3} className='g-3'>
                    <CourseTab type="all"/>
                </Row>
            </div>
        </div>
  )
}

export default CoursePage