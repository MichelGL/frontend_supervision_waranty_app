import React, { useState } from 'react';
import { Card, List, Button, Input, Cascader } from 'antd';
import AppealCard from "./AppealCard.jsx";

function AppealList() {
    const [selectedViolation, setSelectedViolation] = useState(null); // Состояние для хранения выбранного нарушения
    const [filteredData, setFilteredData] = useState(null); // Состояние для хранения отфильтрованных данных
    const [statusFilter, setStatusFilter] = useState([]); // Состояние для хранения выбранных статусов фильтрации

    const data = [
        {
            id: 1,
            title: 'Обращение № 7 от 29.02.2024',
            category: 'Внтуренняя отделка',
            owner: 'Иванов Иван Иванович',
            status: 'Закрыто',
            color: 'bg-green-50 text-green-800 ring-green-600/20',
        },
        {
            id: 2,
            title: 'Обращение № 8 от 13.04.2024',
            category: 'Окна/Двери',
            owner: 'Королев Сергей Павлович',
            status: 'В работе',
            color: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
        },
        {
            id: 3,
            title: `Обращение № 9 от 15.04.2024`,
            category: 'Системы инженерно-технического обеспечения',
            owner: 'Петров Пётр Петрович',
            status: 'Закрыто',
            color: 'bg-green-50 text-green-800 ring-green-600/20',
        },
        {
            id: 4,
            title: 'Обращение № 10 от 16.04.2024',
            category: 'Окна/Двери',
            owner: ' Сидоров Сидр Сидорович',
            status: 'Не обработано',
            color: 'bg-blue-50 text-blue-800 ring-blue-600/20',
        },
    ];

    // Функция для обработки нажатия на элемент списка
    const handleViolationClick = (violationId) => {
        // Здесь вы можете выполнить любые дополнительные действия при выборе нарушения, например, отправить запрос на получение дополнительной информации
        // В данном случае просто обновляем состояние выбранного нарушения
        setSelectedViolation(violationId);
    };

    // Функция для фильтрации данных по статусу
    const handleStatusFilterChange = (value) => {
        setStatusFilter(value);
        if (value.length > 0) {
            const filtered = data.filter((item) => value.includes(item.status));
            setFilteredData(filtered);
        } else {
            setFilteredData(null);
        }
    };

    // Функция для поиска данных по заголовку
    const handleSearch = (value) => {
        const filtered = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filtered);
    };

    return (
        <div className="mt-8 mx-4">
            {selectedViolation ? (
                <AppealCard violationId={selectedViolation}/>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <Cascader
                            options={[
                                {label: 'Не обработано', value: 'Не обработано'},
                                {label: 'В работе', value: 'В работе'},
                                {label: 'Закрыто', value: 'Закрыто'},
                            ]}
                            onChange={handleStatusFilterChange}
                            placeholder="Фильтр по статусу"
                            value={statusFilter}
                        />
                        <Input.Search
                            placeholder="Поиск по заголовку"
                            onSearch={handleSearch}
                            style={{width: 200}}
                        />
                    </div>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 2,
                            xxl: 3,
                        }}
                        dataSource={filteredData || data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    title={item.title}
                                    extra={
                                        <span
                                            className={`inline-flex items-center rounded-md ${item.color.split(' ')[0]} px-2 py-1 text-xs font-medium ${item.color.split(' ')[1]} ring-1 ring-inset ${item.color.split(' ')[2]}`}>
                                    {item.status}
                                </span>}
                                    className="w-full">
                                    <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Категория обращения:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.category}</dd>
                                    </div>
                                    <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Собственник квартиры:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.owner}</dd>
                                    </div>
                                    {/*<div className="text-left">{item.content}</div>*/}
                                    <div className="flex justify-end mt-4">
                                        <Button type="primary"
                                                onClick={() => handleViolationClick(item.id)}>Открыть</Button>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </>
            )}
        </div>
    )
}

export default AppealList