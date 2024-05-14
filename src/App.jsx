import ViolationCard from "./components/ViolationCard.jsx";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IdcardOutlined, SettingOutlined, FileProtectOutlined, AreaChartOutlined, ContainerOutlined, BookOutlined} from '@ant-design/icons';
import { Menu } from 'antd';


const items = [
    {
        label: 'Нарушения',
        key: 'violation',
        icon: <FileProtectOutlined />,
        component: <ViolationCard />,
    },
    {
        label: 'Обращения',
        key: 'appeal',
        icon: <IdcardOutlined />,
    },
    {
        label: 'Дефекты',
        key: 'defect',
        icon: <FileProtectOutlined />,
    },
    {
        label: 'Задачи',
        key: 'task',
        icon: <ContainerOutlined />,
    },
    {
        label: 'Классификатор нарушений/дефектов',
        key: 'classifier',
        icon: <BookOutlined />,
    },
    {
        label: 'Отчеты',
        key: 'report',
        icon: <AreaChartOutlined />,
        disabled: true,
    },
    {
        label: 'Администрирование',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Справочники',
                children: [
                    {
                        label: 'Объекты строительства',
                        key: 'setting:1',
                    },
                    {
                        label: 'Подрядные организации',
                        key: 'setting:2',
                    },
                ],
            },
            {
                label: 'Пользователи',
                key: 'setting:3',
            },
        ],
    },
];
const App = () => {
    const [current, setCurrent] = useState('violation');
    const [selectedComponent, setSelectedComponent] = useState(items.find(item => item.key === 'violation').component);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        const selectedItem = items.find(item => item.key === e.key);
        setSelectedComponent(selectedItem.component);
    };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
            {selectedComponent}
        </>
    )
};
export default App;
