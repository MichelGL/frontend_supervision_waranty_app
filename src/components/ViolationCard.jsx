import { Card } from "antd";

function ViolationCard() {
    const violationId = "123"; // Пример номера нарушения
    const violationDate = "13.04.2024"; // Пример даты нарушения
    return (
        <Card
            title={
                <div className="flex items-center gap-3">
                    <img src = "/Status_Created_icon.png" alt="Иконка статуса создано"/>
                    <p className="text-3xl">{`№${violationId} от ${violationDate}`}</p>
                </div>
            }
            extra={<a href="#">More</a>}
            style={{
                width: 500,
            }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default ViolationCard