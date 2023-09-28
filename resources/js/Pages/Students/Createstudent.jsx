import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function Createstudent(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Create Student</Typography.Text>
            </Card>
        </>
    );
}

Createstudent.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createstudent;
