import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

export default function CardsInWallet() {
    return (
        <Card>
            <CardImage
                src="https://cdn.shopify.com/s/files/1/0270/1351/3269/products/Jehu-cal1529_1445x.jpg"
                alt="Card Image"
            />
            <CardBody>
                <H6 color="gray">Jacket </H6>
                <Paragraph color="gray">
                    by jehucal
                </Paragraph>
            </CardBody>
        </Card>
    )
}
