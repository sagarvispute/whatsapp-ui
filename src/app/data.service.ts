import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()

export class dataService {
    public contacts:any = [
        {
            id: 1,
            name: "Sagar vispute",
            image: "",
            status: "this is the status",
            mobile: 8805448155
        },
        {
            id: 2,
            name: "Ranjit khairnar",
            image: "",
            status: "this is the status",
            mobile: 7588241092
        },
        {
            id: 3,
            name: "Rohit Pillai",
            image: "",
            status: "this is the status",
            mobile: 7896547896
        },
        {
            id: 4,
            name: "Rashmi Shinde",
            image: "",
            status: "this is the status",
            mobile: 88654587987
        },
        {
            id: 5,
            name: "Harshal thakare",
            image: "",
            status: "this is the status",
            mobile: 778898784587
        },
        {
            id: 6,
            name: "vishal bhardvaj",
            image: "",
            status: "this is the status",
            mobile: 8899898874
        },
        {
            id: 7,
            name: "swilton disoza",
            image: "",
            status: "this is the status",
            mobile: 7878989874
        },
        {
            id: 8,
            name: "rahul gandhi",
            image: "",
            status: "this is the status",
            mobile: 9987987874
        },
        {
            id: 9,
            name: "Bhushan patil",
            image: "",
            status: "this is the status",
            mobile: 9898789654
        },
        {
            id: 10,
            name: "Ashish patil",
            image: "",
            status: "this is the status",
            mobile: 8978945632
        }
    ];

    constructor(public navCtrl: NavController){}
    
    getContacts(){
        return this.contacts;
    }

    
}