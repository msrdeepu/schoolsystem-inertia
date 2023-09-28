import React from "react";
import { Button, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link, router } from "@inertiajs/react";

const AddNewSection = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography.Text>{props.title}</Typography.Text>
            <Link type="button" href={window.route("student.create")}>
                <Button icon={<PlusCircleOutlined />} type="primary">
                    {props.btnText}
                </Button>
            </Link>
        </div>
    );
};

export default AddNewSection;
