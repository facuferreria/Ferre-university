import React from 'react'
import { Row, Col } from 'react-bootstrap'
import courses from '../../courses.json'
import CourseCard from '../CourseCard/CourseCard'

function CourseTab() {
  return (
    <div>
        <Row md={2} xs={1} lg={3} className='g-3'>
            {courses.map( item => (
              <Col key={item.id} >
                <CourseCard {...item} />
              </Col>
            ))}
        </Row>
    </div>
  )
}

export default CourseTab