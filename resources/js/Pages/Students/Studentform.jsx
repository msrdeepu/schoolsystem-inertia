import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Form, Row, Col, Input, DatePicker, Button } from "antd";
const { TextArea } = Input;

//jodit editor
import JoditEditor from "jodit-react";

//cancel handler
const onCancel = () => {
    if (confirm("Are Your Sure Want to Cancel?"));
    router.get(route("students.index"));
};

function Studentform({ props, submitForm, saveButton, data, setData }) {
    const [form] = Form.useForm();
    return (
        <>
            <Form
                layout="vertical"
                form={form}
                onFinish={submitForm}
                autoComplete="on"
            >
                <Row gutter={[8, 4]}>
                    <Col xs={24}>
                        <Form.Item label="Student Full Name" name="name">
                            <Input
                                name="name"
                                placeholder="Student Full Name"
                                type="text"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Student Father Name" name="father">
                            <Input
                                name="father"
                                placeholder="Student Father Name"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Student Mother Name" name="mother">
                            <Input
                                name="mother"
                                placeholder="Student Mother Name"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Name of Guardian" name="guardian">
                            <Input
                                name="guardian"
                                placeholder="Please Enter Guardian Name"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Student Age" name="age">
                            <Input
                                name="age"
                                placeholder="Student Age"
                                type="number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Student Adhar Number" name="adhaar">
                            <Input
                                name="adhaar"
                                placeholder="Student Adhar"
                                type="number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Mobile Number" name="phone">
                            <Input
                                name="phone"
                                placeholder="Parents Phone Number"
                                type="number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Email" name="email">
                            <Input
                                name="email"
                                placeholder="Enter Email"
                                type="email"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Date of Birth" name="dob">
                            <DatePicker
                                name="dob"
                                placeholder="Student Date of Birth"
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Joining Class" name="class">
                            <Input
                                name="class"
                                placeholder="Student Joining Class"
                                type="number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Joining Date" name="joindate">
                            <DatePicker
                                style={{ width: "100%" }}
                                name="joindate"
                                placeholder="Student Joining Date"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Medium" name="medium">
                            <Input
                                name="medium"
                                placeholder="Student Medium"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Admission Number" name="admnumber">
                            <Input
                                name="admnumber"
                                placeholder="Enter Admission Number"
                                type="number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Roll Number" name="rollnum">
                            <Input
                                name="rollnum"
                                placeholder="Student Roll Number"
                                type="number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Postal Code" name="pincode">
                            <Input
                                name="pincode"
                                placeholder="Student Postal Code"
                                type="number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Perminant Address" name="address">
                            <TextArea
                                name="address"
                                placeholder="Student Perminant Address"
                                rows={4}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Student Achivements"
                            name="achivements"
                        >
                            <TextArea
                                name="achivements"
                                placeholder="Student Achivements"
                                rows={4}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Scholorships" name="scholorships">
                            <TextArea
                                name="scholorships"
                                placeholder="If any Scholorships"
                                rows={4}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Academic Review"
                            name="academicreview"
                        >
                            <TextArea
                                name="academicreview"
                                placeholder="Student Academic Review"
                                rows={4}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item label="Other Details" name="otherdetails">
                            <JoditEditor name="otherdetails" />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ textAlign: "center" }}>
                    <p>
                        Fields Marked with (
                        <span style={{ color: "red" }}>*</span>) Astrick are
                        Mandatory
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button type="primary" style={{ margin: "8px" }}>
                            {saveButton}
                        </Button>
                        <Button
                            onClick={onCancel}
                            type="primary"
                            danger
                            style={{ margin: "8px" }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Form>
        </>
    );
}

Studentform.layout = (page) => <AuthenticatedLayout children={page} />;

export default Studentform;
