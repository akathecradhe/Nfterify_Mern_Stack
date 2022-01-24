import React from "react";
import Button from "@material-tailwind/react/Button";
import Card from 'react-bootstrap/Card'

export default function CardsInWallet() {
    return (
        <Card  >
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0270/1351/3269/products/Jehu-cal1529_1445x.jpg"
                      style={{ width: '16rem', height: '20rem' }} className="border border-red-500"
            />
            <Card.Body >
                <Card.Title>Jacket</Card.Title>
                <Card.Text>
                    by jehucal
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>


    )
}
