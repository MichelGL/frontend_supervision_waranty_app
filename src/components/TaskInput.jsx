import { Card, Button, Input, DatePicker, Space, Row, Col, Select } from 'antd';

const { Option } = Select;

function TaskInput() {
    return (
        <Card title="Ввод данных задачи" style={{ width: 600 }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Input placeholder="Номер задачи" />

                <Input placeholder="Название задачи" />

                <Row gutter={16}>
                    <Col span={12}>
                        <DatePicker placeholder="Дата постановки" style={{ width: '100%' }} />
                    </Col>
                    <Col span={12}>
                        <DatePicker placeholder="Дата завершения" style={{ width: '100%' }} />
                    </Col>
                </Row>

                <DatePicker placeholder="Крайний срок" style={{ width: '100%' }} />

                <Select placeholder="Постановщик" style={{ width: '100%' }}>
                    <Option value="Пользователь 1">Пользователь 1</Option>
                    <Option value="Пользователь 2">Пользователь 2</Option>
                    <Option value="Пользователь 3">Пользователь 3</Option>
                </Select>

                <Select placeholder="Исполнитель" style={{ width: '100%' }}>
                    <Option value="Исполнитель 1">Исполнитель 1</Option>
                    <Option value="Исполнитель 2">Исполнитель 2</Option>
                    <Option value="Исполнитель 3">Исполнитель 3</Option>
                </Select>

                <Input.TextArea placeholder="Описание" autoSize={{ minRows: 3, maxRows: 5 }} />

                <Row justify="end">
                    <Space>
                        <Button danger>Отменить</Button>
                        <Button type="primary">Сохранить</Button>
                    </Space>
                </Row>
            </Space>
        </Card>
    );
}

export default TaskInput;
