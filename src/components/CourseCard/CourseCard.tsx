import { Button, Card } from "react-bootstrap"
import './CourseCard.scss'

interface CourseProps {
    name: string,
    description: string,
    image: string,
    type: string[],
    price: number,
}

function CourseCard({ name, description, image, price }: CourseProps) {
  return (
    <Card bg="dark" style={{ width: "18rem", height: "372px"}}>
      <Card.Img variant="top" src={image} height="180px" alt="curso" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning">${price}</Button>
      </Card.Body>
    </Card>
  )
}

export default CourseCard