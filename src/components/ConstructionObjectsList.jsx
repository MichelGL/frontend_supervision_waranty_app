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

    const [isViolationListVisible, setIsViolationListVisible] = useState(false);

    const handleButtonClick = () => {
        setIsViolationListVisible(true);
    };
    return (
        <div className="mt-8 mx-4">
            {isViolationListVisible ? (
                <ViolationList />
            ) : (
            <List
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item actions={[
                        // eslint-disable-next-line react/jsx-key
                        <Button type="primary" onClick={handleButtonClick}>Перейти к нарушениям</Button>,
                        // eslint-disable-next-line react/jsx-key
                        <Button>Открыть карточку объекта</Button>,
                    ]}>
                        {item.title}
                    </List.Item>
                )}
            />
            )}
            {/*{isViolationListVisible && <ViolationList />}*/}
        </div>
    )
}

export default ConstructionObjectsList;
