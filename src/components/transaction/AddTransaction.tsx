/**
 * Created by hao.cheng on 2017/4/23.
 */
 import React, { useState } from 'react';
 import { Form, Input, Button, Radio, Select, Cascader, DatePicker, TimePicker, InputNumber, TreeSelect, Switch, } from 'antd';
 import BreadcrumbCustom from '../widget/BreadcrumbCustom';
 import { RadioChangeEvent } from 'antd/lib/radio';
 import { ButtonSize } from 'antd/lib/button';
 import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
 import axios from 'axios';

 type SizeType = Parameters<typeof Form>[0]['size'];

 class AddTransaction extends React.Component<any, SizeType> {
     constructor(props: any) {
         super(props);
         // this.state = {
         //     size: 'middle',
         //     loading: false,
         //     iconLoading: false,
         // };
     }

     handleSizeChange = (e: RadioChangeEvent) => {
         this.setState({ size: e.target.value });
     };
     handleMenuClick = (e: any) => {
         const data = {
             "accountBookId": 1,
             "typeEnum": "EXPEND",
             "expendAccount": "现金",
             "transactionClass": "晚餐",
             "transferObject": "狮子头2",
             "money": 102.5,
             "date": "2021-05-06 09:09:15"
         }
         axios.post('http://localhost:8080/transaction/add', data);
     };
     enterLoading = () => {
         this.setState({ loading: true });
     };
     enterIconLoading = () => {
         this.setState({ iconLoading: true });
     };
     render() {
         // const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
         // const onFormLayoutChange = ({ size }: { size: SizeType }) => {
         //   setComponentSize(size);
         // };
         return (
             <div>
                 <Form
                     labelCol={{ span: 4 }}
                     wrapperCol={{ span: 14 }}
                     layout="horizontal"
                     onSubmitCapture={this.handleMenuClick}
                 // initialValues={{ size: componentSize }}
                 // onValuesChange={onFormLayoutChange}
                 // size={componentSize as SizeType}
                 >
                     <Form.Item label="Input">
                         <Input />
                     </Form.Item>
                     <Form.Item label="DatePicker">
                         <DatePicker />
                     </Form.Item>
                     <Form.Item label="TimePicker">
                         <TimePicker />
                     </Form.Item>
                     <Form.Item label="Button">
                         <Button type="primary" htmlType="submit">
                             Submit
                         </Button>
                     </Form.Item>
                 </Form>

             </div>
         )
     }
 }

 export default AddTransaction;
