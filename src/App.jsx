
import ConstructionObjectsList from "./components/ConstructionObjectsList.jsx";
import DefectCard from "./components/DefectCard.jsx";
import ViolationList from "./components/ViolationList.jsx";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IdcardOutlined, SettingOutlined, FileProtectOutlined, AreaChartOutlined, ContainerOutlined, BookOutlined, ShopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import AppealCard from "./components/AppealCard.jsx";
import AppealList from "./components/AppealList.jsx";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Report from "./components/Report";

const components = {
    violations: <ViolationList />,
    appeals: <AppealList />,
    construction_objects: <ConstructionObjectsList />,
    appeal: <AppealCard />,
    defects: <DefectCard/>,
    task: <TaskInput/>,
    tasks: <TaskList/>,
    report: <Report/>
};

const items = [
    {
        label: 'Объекты строительства',
        key: 'construction_objects',
        icon: <ShopOutlined />,
    },
    {
         label: 'Нарушения',
         key: 'violations',
         icon: <FileProtectOutlined />,
    },
    // {
    //     label: 'Обращения',
    //     key: 'appeals',
    //     icon: <IdcardOutlined />,
    // },
    // {
    //     label: 'Дефекты',
    //     key: 'defects',
    //     icon: <FileProtectOutlined />,
    // },
    {
        label: 'Задачи',
        key: 'tasks',
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
        disabled: false,
        children: [
            {
                type: 'group',
                label: 'Накопительные отчеты по нарушениям',
                children: [
                    {
                        label: 'По видам работ',
                        key: 'report',
                    },
                    {
                        label: 'По подрядчика',
                        key: 'setting:2',
                    },
                ],
            },
            {
                label: 'Мониторинг текущей ситуации',
                key: 'setting:3',
            },
        ],
    },
    {
        label: 'Администрирование',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        disabled: true,
        children: [
            {
                type: 'group',
                label: 'Справочники',
                children: [
                    {
                        label: 'Объекты строительства',
                        key: 'report',
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
    const [current, setCurrent] = useState('construction_objects');

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
