// import ViolationCard from "./components/ViolationCard.jsx";
import ViolationList from "./components/ViolationList.jsx";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IdcardOutlined, SettingOutlined, FileProtectOutlined, AreaChartOutlined, ContainerOutlined, BookOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import AppealCard from "./components/AppealCard.jsx";

const components = {
    violations: <ViolationList />,
    appeals: <AppealCard />,
    // другие компоненты...
};

const items = [
    {
        label: 'Нарушения',
        key: 'violations',
        icon: <FileProtectOutlined />,
    },
    {
        label: 'Обращения',
        key: 'appeals',
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
    const [current, setCurrent] = useState('violations');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            {components[current]}
        </>
    )
};
export default App;
