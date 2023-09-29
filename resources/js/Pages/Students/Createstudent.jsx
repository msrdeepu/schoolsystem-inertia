import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Card, Typography } from "antd";
import Studentform from "./Studentform";

function Createstudent({ props }) {
    //submi Form Handler
    const formSubmitHandler = (values) => {
        console.log("Hello");
    };

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Add Student `}>
                <Studentform
                    submitForm={formSubmitHandler}
                    saveButton={"Save"}
                />
            </Card>
        </>
    );
}

Createstudent.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createstudent;
