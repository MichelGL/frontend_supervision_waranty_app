import {Card, Button, Input, DatePicker, Space, Row, Select, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import  {useState} from "react";
import TaskList from "./TaskList.jsx";

const { Option } = Select;

function TaskInput() {

    const uploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // Пример действия загрузки на сервер (замените на свой URL)
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                console.log(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                console.log(`${info.file.name} file upload failed.`);
            }
        },
    };

    const [isTaskListVisible, setIsTaskListVisible] = useState(false);

    const handleButtonClick = () => {
        setIsTaskListVisible(true);
    };

    return (
        <div>
            {isTaskListVisible ? (
                <TaskList />
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <Card title="Ввод данных задачи" style={{ width: 800 }}>
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            <Input placeholder="Номер задачи" defaultValue="1"/>

                            <Input placeholder="Название задачи"/>

                            <DatePicker placeholder="Крайний срок" style={{ width: '100%' }} />

                            <Select placeholder="Исполнитель" style={{ width: '100%' }}>
                                <Option value="Пользователь 1">Михайлов Михаил Михайлович</Option>
                                <Option value="Пользователь 2">Леонидов Леонид Леонидович</Option>
                            </Select>

                            <Input.TextArea placeholder="Описание" autoSize={{ minRows: 3, maxRows: 5 }} />

                            <Upload {...uploadProps}>
                                <Button icon={<UploadOutlined />}>Прикрепить файл</Button>
                            </Upload>

                            <Row justify="end">
                                <Space>
                                    <Button danger>Отменить</Button>
                                    <Button type="primary" onClick={handleButtonClick}>Сохранить</Button>
                                </Space>
                            </Row>
                        </Space>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default TaskInput;
