import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";

import { addCardToBucket } from "../store/bucketSlice";

export default function CreateCardForm({ cardId, setInputForm }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(
      addCardToBucket({
        id: cardId,
        values,
      })
    );
    form.resetFields();
  };

  const handleClose = () => {
    setInputForm(null);
  };

  return (
    <div className="create-card-form-wrapper">
      <Form
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onSubmit={(e) => e.preventDefault()}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Card Name"
          name="cardname"
          rules={[
            {
              required: true,
              message: "card name required",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Card Link"
          name="cardlink"
          rules={[
            {
              required: true,
              message: "card link required",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            type="primary"
            danger
            htmlType="submit"
            style={{ margin: "0.5rem" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
