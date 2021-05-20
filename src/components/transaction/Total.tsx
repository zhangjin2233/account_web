/**
 * Created by hao.cheng on 2017/4/23.
 */
import React, { useState } from 'react';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, TimePicker, InputNumber, Avatar, Space, List } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { RadioChangeEvent } from 'antd/lib/radio';
import axios from 'axios';

type SizeType = Parameters<typeof Form>[0]['size'];


class Total extends React.Component<any, SizeType> {
    constructor(props: any) {
        super(props);
        // this.state = {
        //     size: 'middle',
        //     loading: false,
        //     iconLoading: false,
        // };
    }


    enterLoading = () => {
        this.setState({ loading: true });
    };
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };


    render() {

        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: 'https://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }

        return (
            <div>
                <List itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    renderItem={item => (
                        <List.Item
                          key={item.title}
                          actions={[
                            <Space key="list-vertical-star-o">
                            {React.createElement(StarOutlined)}
                            {156}
                          </Space>,
                            // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                          ]}
                          extra={
                            <img
                              width={272}
                              alt="logo"
                              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                          }
                        >
                          <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                          />
                          {item.content}
                        </List.Item>
                      )}
                    >
                        <List.Item>asdasd</List.Item>
                </List>

            </div>
        )
    }
}

export default Total;
