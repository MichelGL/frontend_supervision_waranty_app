import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Listbox } from '@headlessui/react';

const Report = () => {
    const [selectedObject, setSelectedObject] = useState('Все объекты');

    const objects = ['Все объекты', 'ЖК Дальше', 'Экопарк Солнечный ветер', 'ЖК Янтарный']; // Пример объектов строительства
    const data = [
        { object: 'ЖК Дальше', type: 'Строительные конструкции', count: 3 },
        { object: 'ЖК Дальше', type: 'Внутренняя отделка', count:  0},
        { object: 'ЖК Дальше', type: 'Наружная отделка', count: 2 },
        { object: 'ЖК Дальше', type: 'Окна/Двери', count: 0 },
        { object: 'ЖК Дальше', type: 'Системы инженерно-технического обеспечения', count: 0 },
        { object: 'Экопарк Солнечный ветер', type: 'Строительные конструкции', count: 8 },
        { object: 'Экопарк Солнечный ветер', type: 'Внутренняя отделка', count: 3 },
        { object: 'Экопарк Солнечный ветер', type: 'Наружная отделка', count: 6 },
        { object: 'Экопарк Солнечный ветер', type: 'Окна/Двери', count: 4 },
        { object: 'Экопарк Солнечный ветер', type: 'Системы инженерно-технического обеспечения', count: 5 },
        { object: 'ЖК Янтарный', type: 'Строительные конструкции', count: 8 },
        { object: 'ЖК Янтарный', type: 'Внутренняя отделка', count: 3 },
        { object: 'ЖК Янтарный', type: 'Наружная отделка', count: 6 },
        { object: 'ЖК Янтарный', type: 'Окна/Двери', count: 4 },
        { object: 'ЖК Янтарный', type: 'Системы инженерно-технического обеспечения', count: 5 },
        // Добавьте другие объекты и типы работ
    ];

    const filteredData = selectedObject === 'Все объекты' ? data : data.filter(item => item.object === selectedObject);

    const summaryData = filteredData.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = 0;
        }
        acc[item.type] += item.count;
        return acc;
    }, {});

    const totalDefects = Object.values(summaryData).reduce((acc, count) => acc + count, 0);

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-4">
            <div className="w-full lg:w-1/2">
                <Listbox value={selectedObject} onChange={setSelectedObject}>
                    <Listbox.Button className="border border-gray-300 rounded-md p-2 mb-4 w-full text-left">
                        {selectedObject}
                    </Listbox.Button>
                    <Listbox.Options className="border border-gray-300 rounded-md p-2 w-full">
                        {objects.map((object, index) => (
                            <Listbox.Option key={index} value={object}>
                                {object}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
                <table className="min-w-full divide-y divide-gray-200 border">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2">Классификатор дефектов</th>
                        <th className="px-4 py-2">Строительные конструкции</th>
                        <th className="px-4 py-2">Внутренняя отделка</th>
                        <th className="px-4 py-2">Наружная отделка</th>
                        <th className="px-4 py-2">Окна/Двери</th>
                        <th className="px-4 py-2">Системы инженерно-технического обеспечения</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-2">Замечания по подрядчикам (общее)</td>
                        <td className="px-4 py-2">{summaryData['Строительные конструкции'] || 0}</td>
                        <td className="px-4 py-2">{summaryData['Внутренняя отделка'] || 0}</td>
                        <td className="px-4 py-2">{summaryData['Наружная отделка'] || 0}</td>
                        <td className="px-4 py-2">{summaryData['Окна/Двери'] || 0}</td>
                        <td className="px-4 py-2">{summaryData['Системы инженерно-технического обеспечения'] || 0}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">В проценте от общего числа</td>
                        <td className="px-4 py-2">{totalDefects ? ((summaryData['Строительные конструкции'] || 0) / totalDefects * 100).toFixed(2) + '%' : '0%'}</td>
                        <td className="px-4 py-2">{totalDefects ? ((summaryData['Внутренняя отделка'] || 0) / totalDefects * 100).toFixed(2) + '%' : '0%'}</td>
                        <td className="px-4 py-2">{totalDefects ? ((summaryData['Наружная отделка'] || 0) / totalDefects * 100).toFixed(2) + '%' : '0%'}</td>
                        <td className="px-4 py-2">{totalDefects ? ((summaryData['Окна/Двери'] || 0) / totalDefects * 100).toFixed(2) + '%' : '0%'}</td>
                        <td className="px-4 py-2">{totalDefects ? ((summaryData['Системы инженерно-технического обеспечения'] || 0) / totalDefects * 100).toFixed(2) + '%' : '0%'}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <BarChart width={600} height={400} data={Object.entries(summaryData).map(([type, count]) => ({ type, count }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Report;
