import { useState } from 'react';
import { Card, List, Button, Input, Cascader } from 'antd';
import ViolationCard from './ViolationCard.jsx';

function ViolationList() {
    const [selectedViolation, setSelectedViolation] = useState(null); // Состояние для хранения выбранного нарушения
    const [filteredData, setFilteredData] = useState(null); // Состояние для хранения отфильтрованных данных
    const [statusFilter, setStatusFilter] = useState([]); // Состояние для хранения выбранных статусов фильтрации

    const data = [
        {
            id: 1,
            title: '№ 3 от 01.04.2024 "Отсутствует ограждение"',
            content: 'Отсутствует ограждение подкрановых путей башенных кранов со стороны \n' +
                'второй, третьей секции. (нарушение требований ГОСТ Р 51248-99 п.4.5.4)',
            status: 'Устранено',
            color: 'bg-green-50 text-green-800 ring-green-600/20',
        },
        {
            id: 2,
            title: '№ 8 от 07.04.2024 "Мусор"',
            content: 'На строительной площадке мусор от монолитных работ\n' +
                '(бетонные куски) (нарушение требований Правил по охране труда при строительстве).',
            status: 'Создано',
            color: 'bg-blue-50 text-blue-800 ring-blue-600/20',
        },
        {
            id: 3,
            title: `№ 10 от 07.04.2024 "Нет удостоверений"`,
            content: ' Не предоставлены удостоверения  исполнителей\n' +
                '(сварщиков, работ на высоте, стропальщиков и другие).',
            status: 'Устранено',
            color: 'bg-green-50 text-green-800 ring-green-600/20',
        },
        {
            id: 4,
            title: '№ 11 от 07.04.2024 "Не установлены неподвижные опоры"',
            content: 'Не установлены неподвижные опоры на стояках отопления',
            status: 'Создано',
            color: 'bg-blue-50 text-blue-800 ring-blue-600/20',
        },
        {
            id: 5,
            title: '№ 12 от 13.04.2024 "Складирование материалов, мусор"',
            content: 'Складирование опалубки, поддонов и других материалов – навалом, нет проходов к зданию,\n' +
                '                                мусор не вывозится.\n' +
                '                                В ИТП, лифтовых шахтах постоянно стоит вода.\n' +
                '                                Имеются провалы грунта у ростверков.',
            status: 'В работе',
            color: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
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
                <ViolationCard violationId={selectedViolation}/>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <Cascader
                            options={[
                                {label: 'Создано', value: 'Создано'},
                                {label: 'В работе', value: 'В работе'},
                                {label: 'Устранено', value: 'Устранено'},
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
                                    <div className="text-left">{item.content}</div>
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

export default ViolationList