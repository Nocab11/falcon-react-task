import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardBody, CardImg, CardLink } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Users = () => (
   <>
       <Card body className="mb-3">
           <Row>
               <Col sm="12">
                   <div className="d-md-flex">
                       <CardImg top src="https://d.radikal.ru/d13/2107/a9/e5cf211d3cca.png" alt="Card image cap" style={{ width: 'auto' }} />
                       <CardBody>
                           <CardTitle tag="h5">Ivan Ivanov</CardTitle>
                           <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laborum nisi officiis perferendis quisquam, sunt tempora voluptas? Amet, eaque eligendi eos et labore, nemo pariatur reiciendis reprehenderit sed sequi tenetur!</CardText>
                           <CardText>
                               <small className="text-muted">Last updated 3 mins ago</small>
                           </CardText>
                       </CardBody>
                   </div>
               </Col>
           </Row>
           <Row className="mt-3">
               <Col md="4">
                   <Card body className="mt-3">
                       <CardTitle tag="h5">Логи</CardTitle>
                       <ul>
                           <li><CardLink>It u classes </CardLink></li>
                           <li><CardLink>It uses utility classes </CardLink></li>
                           <li><CardLink>It uses utility classe</CardLink></li>
                       </ul>

                   </Card>
               </Col>
               <Col md="4">
                   <Card body className="mt-3">
                       <CardTitle tag="h5">Список заказов</CardTitle>
                       <ul>
                           <li>Lorem ipsum dolor sit amet</li>
                           <li>Consectetur adipiscing elit</li>
                           <li>Integer molestie lorem at massa</li>
                       </ul>

                   </Card>
               </Col>
               <Col md="4">
                   <Card body className="mt-3">
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
   </>
);

export default Users;
