import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography, Button } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

//components
import AddNewSection from "@/components/AddNewSection";

function Studentlist(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <AddNewSection title="Students Page" btnText="New Student" />
            </Card>
        </>
    );
}

Studentlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Studentlist;
