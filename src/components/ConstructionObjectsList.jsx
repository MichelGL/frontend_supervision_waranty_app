import React, {useState} from 'react';
import { List, Button } from 'antd';

const data = [
    {
       id: 1,
       title: 'ЖК Дальше'
    },
    {
        id: 2,
        title: 'Экопарк Солнечный ветер'
    },
    {
        id: 3,
        title: 'ЖК Янтарный'
    },
];

// const [selectedObject, setSelectedObject] = useState(null);
//
// const onClick = (objectId) => {
//     setSelectedObject(objectId);
// };

const ConstructionObjectsList = () => (
    <div className="mt-8 mx-4">
        <List
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item actions={[
                    <Button type="primary">Перейти к нарушениям</Button>,
                    <Button>Открыть карточку объекта</Button>,
                ]}>
                    {item.title}
                </List.Item>
            )}
        />
    </div>
);

export default ConstructionObjectsList;
