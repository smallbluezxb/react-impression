import React, { Component } from 'react';
import { Card, Switch, Form, Breadcrumb } from '../components/impression';
import { CommenTable } from '../components';

export default class SwitchView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h5>Switch</h5>
                    <Card block>
                        <Form grid>
                            <Form.Group col="6">
                                <label>Default</label>
                                <Switch defaultChecked/>
                            </Form.Group>
                            <Form.Group>
                                <label>Disabled</label>
                                <Switch disabled defaultChecked />
                            </Form.Group>
                        </Form>
                    </Card>
                    <h5 className="text-secondary">API</h5>
                    <CommenTable
                        data = {[
                            ['defaultChecked', '是否默认选中', 'boolean', ''],
                            ['disabled', '是否可以点击', 'boolean', ''],
                            ['onChange', '状态变更回调函数', 'function', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

SwitchView.title = 'Switch';
