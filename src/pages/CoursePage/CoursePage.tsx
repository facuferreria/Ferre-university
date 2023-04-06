import FilterForm from "../../components/FilterForm/FilterForm"
import FiltersSideBar from "../../components/FiltersSideBar/FiltersSideBar"
import style from '../CoursePage/CoursePage.module.scss'
import { useState } from "react"
import { ListGroup, Button, Row } from "react-bootstrap"
import Slider from "../../components/Slider/Slider"
import CourseList from "../../components/CourseList/CourseList"
import { useFilters } from "../../context/FilterContext"


function CoursePage() {

    const popularityOptions = ["4.5", "3.5", "2.5", "1.5"];
    const categoryOptions = ["All", "Web Development", "Javascript", "Python", "Cibersecurity", "Office", "Blockchain"];
    const recordingOptions = ["All", "In Live", "Recorded"];
    const [radioOption, setSelectedRadioOption] = useState("");
    const [checkedOptions, setSelectedCheckOptions] = useState<string[]>([]);
    const {price, filterByPopularity} = useFilters();

    const handleRadioOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadioOption(event.target.value);
        filterByPopularity(parseFloat(event.target.value));
    };

    const handleCheckOptionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCheckOptions({
            ...checkedOptions,
            [event.target.name]: event.target.checked,
        });
    };

    const setFilters = () => {}

    console.log(checkedOptions, radioOption);
    

    return (
        <div className={style.container}>
            <div className={style.container_filter}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Button className={style.button} size="lg" variant="warning" onClick={() => setFilters()}>Filtrar</Button>
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
                                    selectedOption={radioOption}
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
                    <CourseList courses={price}/>
                </Row>
            </div>
        </div>
  )
}

export default CoursePage