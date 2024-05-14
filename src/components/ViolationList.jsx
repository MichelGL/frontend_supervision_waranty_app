import { useState } from 'react';
import { Card, List } from 'antd';
import ViolationCard from './ViolationCard';

function ViolationList() {
    const [selectedViolation, setSelectedViolation] = useState(null); // Состояние для хранения выбранного нарушения

    const data = [
        {
            id: 1,
            title: 'Title 1',
        },
        {
            id: 2,
            title: 'Title 2',
        },
        {
            id: 3,
            title: 'Title 3',
        },
        {
            id: 4,
            title: 'Title 4',
        },
        {
            id: 5,
            title: 'Title 5',
        },
        {
            id: 6,
            title: 'Title 6',
        },
    ];

    // Функция для обработки нажатия на элемент списка
    const handleViolationClick = (violationId) => {
        // Здесь вы можете выполнить любые дополнительные действия при выборе нарушения, например, отправить запрос на получение дополнительной информации
        // В данном случае просто обновляем состояние выбранного нарушения
        setSelectedViolation(violationId);
    };

    return (
        <div>
            {selectedViolation ? (
                <ViolationCard violationId={selectedViolation} />
            ) : (
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item onClick={() => handleViolationClick(item.id)}>
                            <Card title={item.title}>Card content</Card>
                        </List.Item>
                    )}
                />
            )}
        </div>
    )
}

export default ViolationList