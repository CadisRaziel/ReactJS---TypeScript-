
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
type Props = {};

interface PlaceModel {
    userId: number;
    id: number;
    title: string;
    body: string;

}

let countRender = 0;
export const Room = (props: Props) => {
    const [place, setPlace] = useState<PlaceModel[]>([]);

    console.log(++countRender)
    useEffect(() => { 
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPlace(response.data);
            }).catch(function (error) {
                console.error(error);
            });;
    }, []);
    //[] -> fica observando se as variaveis estão trocando de valor e com isso rebuilda o componente
    //preicsa por variavies dentro []
    //se deixa vazio, só vai renderizar uma vez e só


    return (
        <div>
            <h1>Salas</h1>
            {place.map(places => (
                <ul>
                    <li>User ID : {places.userId}</li>
                    <li>ID : {places.id}</li>
                    <li>Title : {places.title}</li>
                    <li>Body :{places.body}</li>
                </ul>
            ))}
        </div>
    );
};