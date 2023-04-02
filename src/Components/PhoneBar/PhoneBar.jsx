import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(data => {
                const loadData = data.data.data;

                const phonesData = loadData.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo
                })
                setPhones(phonesData)
            })
    }, [])
    return (
        <div>
            <BarChart width={1000} height={500} data={phones}>
                <Bar dataKey='price' fill = '#8884d8'></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;