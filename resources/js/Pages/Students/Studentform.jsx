import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function Studentform(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Student Form</Typography.Text>
            </Card>
        </>
    );
}

Studentform.layout = (page) => <AuthenticatedLayout children={page} />;

export default Studentform;
