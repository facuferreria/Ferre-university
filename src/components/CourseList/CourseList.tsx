import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CourseCard from '../CourseCard/CourseCard'
import style from '../CourseList/CourseList.module.scss'

interface CourseProps {
  id: number,
  name: string,
  description: string,
  image: string,
  type: string[],
  price: number,
}

interface CourseFiltersTypes {
  courses: CourseProps[]
}

const CourseList: React.FC<CourseFiltersTypes> = ({courses}) => {
  return (
    <div className={style.container}>
        <Row md={2} xs={1} lg={3} className='g-5'>
            {
              courses
              .map( item => (
                <Col key={item.id} >
                  <CourseCard {...item} />
                </Col>
              ))
            }
        </Row>
    </div>
  )
}

export default CourseList