import { useState } from 'react';
import { Card, List, Button, Input, Cascader } from 'antd';


function TaskList() {
    const [filteredData, setFilteredData] = useState(null); // Состояние для хранения отфильтрованных данных
    const [statusFilter, setStatusFilter] = useState([]); // Состояние для хранения выбранных статусов фильтрации

    const data = [
        {
            id: 1,
            title: 'Задача № 1 от 13.04.2024',
            contractor: 'Леонидов Леонид Леонидович',
            deadline: '06.05.2024',
            status: 'В работе',
            color: 'bg-green-50 text-green-800 ring-green-600/20',
        },
        {
            id: 1,
            title: 'Задача № 2 от 18.04.2024',
            contractor: 'Михайлов Михаил Михайлович',
            deadline: '07.05.2024',
            status: 'Создана',
            color: 'bg-blue-50 text-blue-800 ring-blue-600/20',
        },
    ];


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
            <div className="flex justify-between items-center mb-4">
                <Cascader
                    options={[
                        {label: 'Создана', value: 'Создана'},
                        {label: 'В работе', value: 'В работе'},
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
                                <dt className="text-sm font-medium leading-6 text-gray-900">Исполнитель:
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.contractor}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Крайний срок:
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.deadline}</dd>
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button type="primary">Открыть</Button>
                            </div>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TaskList

