import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Card, Button, CardTitle, CardText, Row, Col, CardBody, CardImg, CardLink } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
              "http://localhost:3001/users"
            );
            setUsers(result.data)
        }
        fetchData()
    }, [])
    console.log(users)

    return (
        <>
            <h2 className="mb-3">Страница с пользователями</h2>
            {users.map((user, i) => (
                <div key={i}>
                    <Card body className="mb-3">
                        <Row>
                            <Col sm="12">
                                <div className="d-md-flex">
                                    <CardImg top src={user.img} alt="Card image cap" style={{ width: 'auto' }} />
                                    <CardBody>
                                        <CardTitle tag="h5">{user.name}</CardTitle>
                                        <CardText>{user.description}</CardText>
                                    </CardBody>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-3">
                            <Col md="4">
                                <Card body className="mt-3 h-100">
                                    <CardTitle tag="h5">Логи</CardTitle>
                                    <ul>
                                        {user.logs.map((log, j) => (
                                            <li key={j}>
                                                <CardLink key={j}>
                                                    {log}
                                                </CardLink>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card body className="mt-3 h-100">
                                    <CardTitle tag="h5">Список заказов</CardTitle>
                                    <ul>
                                        {user.ordersList.map((order, j) => (
                                            <li key={j}>
                                            {order}
                                            </li>
                                        ))}

                                    </ul>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card body className="mt-3 h-100">
                                    <CardTitle tag="h5">Текущий пароль</CardTitle>
                                    <Form>
                                        <FormGroup>
                                            <Label for="examplePassword">Пароль</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="Введите пароль" />
                                        </FormGroup>
                                        <Button>Обновить</Button>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </div>
            ))}
        </>
    )
}

export default Users;
