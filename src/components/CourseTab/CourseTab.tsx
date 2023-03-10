import React from 'react'
import { Row, Col } from 'react-bootstrap'
import courses from '../../courses.json'
import CourseCard from '../CourseCard/CourseCard'

interface CourseType {
  type: string;
}

const CourseTab: React.FC<CourseType> = ({type}) => {
  return (
    <div>
        <Row md={2} xs={1} lg={3} className='g-3'>
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