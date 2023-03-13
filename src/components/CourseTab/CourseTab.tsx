import React from 'react'
import { Row, Col } from 'react-bootstrap'
import courses from '../../courses.json'
import CourseCard from '../CourseCard/CourseCard'
import style from '../CourseTab/CourseTab.module.scss'

interface CourseType {
  type: string;
}

const CourseTab: React.FC<CourseType> = ({type}) => {
  return (
    <div className={style.container}>
        <Row md={2} xs={1} lg={3} className='g-5'>
            {
              courses
              .filter(item => item?.type.includes(type))
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

export default CourseTab