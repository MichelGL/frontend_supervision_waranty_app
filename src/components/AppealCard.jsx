import {Card} from "antd";

function AppealCard() {

    return (
        <div>
            <Card
                title="Обращение № 185"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default AppealCard
