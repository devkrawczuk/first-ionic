import {
    IonContent, IonHeader, IonTitle,IonToolbar, IonItem, IonAvatar, IonImg, IonLabel, IonList, IonPage
} from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Tab2.css';

const Tab2: React.FC = () => {


    const [ listItems, setListItems  ] = useState<any>([]);



    React.useEffect(() => {
        sendRequest();
    }, []);



    const sendRequest = () => {
        return axios
            .get('https://gorest.co.in/public/v2/users',{
                headers:{
                    'Content-Type' : 'application/json'
                },
            })
            .then((response) => {
                console.log(response);
                return setListItems(response.data);
            })
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle> List </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList color="primary">
                    {
                        listItems.map((item :any) => {

                            return (
                                <IonItem key={item['id']}>
                                    <IonLabel>
                                        <h3> {item['name']} {item['email']} </h3>
                                    </IonLabel>
                                </IonItem>
                            );
                        })
                    }

                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Tab2;
