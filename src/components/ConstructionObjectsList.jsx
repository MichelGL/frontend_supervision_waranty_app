import React, {useState} from 'react';
import { List, Button } from 'antd';
import ViolationList from "./ViolationList.jsx";

// const [selectedObject, setSelectedObject] = useState(null);
//
// const onClick = (objectId) => {
//     setSelectedObject(objectId);
// };

function ConstructionObjectsList(){
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
    return (
        <div className="mt-8 mx-4">
            <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item actions={[
                        <Button type="primary" onClick={ ViolationList }>Перейти к нарушениям</Button>,
                        <Button>Открыть карточку объекта</Button>,
                    ]}>
                        {item.title}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ConstructionObjectsList;
