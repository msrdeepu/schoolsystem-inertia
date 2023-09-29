import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Table, Typography, Button, Col, Row, Space } from "antd";

import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

//table columns
const columns = [
    {
        title: "Adm. No",
        dataIndex: "code",
        key: "key",
    },

    {
        title: "Name",
        dataIndex: "email",
        key: "key",
    },
    {
        title: "Phone",
        dataIndex: "phonenumber",
        key: "key",
    },

    {
        title: "Class",
        dataIndex: "mobilenumber",
        key: "key",
    },
    {
        title: "Medium",
        dataIndex: "status",
        key: "key",
    },

    {
        title: "Joining Date",
        dataIndex: "created_at",
        key: "key",
    },
    {
        title: "Actions",
        dataIndex: "actions",
        render: (_, record) => (
            <Space size="small">
                <Button
                    style={{ margin: "5px" }}
                    shape="circle"
                    id={record.id}
                    //onClick={editRecord}
                    icon={<EditOutlined />}
                />
                <Button
                    style={{ margin: "5px" }}
                    shape="circle"
                    id={record.id}
                    icon={<DeleteOutlined />}
                    //onClick={destroyRecord}
                    danger
                />
            </Space>
        ),
    },
];

//components
import AddNewSection from "@/components/AddNewSection";

function Studentlist(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <AddNewSection title="Students Page" btnText="New Student" />
                <hr />
                <Table
                    columns={columns}
                    // dataSource={branchesList}
                    size="small"
                />
            </Card>
        </>
    );
}

Studentlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Studentlist;
